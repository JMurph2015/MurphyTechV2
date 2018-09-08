FROM rustlang/rust:nightly as rust_build

# Need to install the protoc compiler for the build process to complete.
RUN apt-get update && apt-get install --no-install-recommends -y \
  protobuf-compiler \
  libssl-dev \
  libssl1.1 \
  && rm -rf /var/lib/apt/lists/*
  

# Using hacks detailed at https://whitfin.io/speeding-up-rust-docker-builds/
# to save me from the 5min build times.
# Basically, we make a fake project that has as stable of code as possible,
# meaning dependencies and slow moving interfaces like applych.
# We build those and cache them, then later build the whole project.

# Create the empty project at /usr/src/app
WORKDIR /usr/src
RUN USER=root cargo new --lib server
WORKDIR /usr/src/server

# Copy over the Cargo.toml, Cargo.lock, utilities, and mocks
COPY ./server/Cargo.lock ./Cargo.lock
COPY ./server/Cargo.toml ./Cargo.toml
COPY ./server/mocks ./src

# Build the empty project to compile and cache dependencies
RUN cargo build && rm src/*.rs

# Copy in the build script and the real src directory
COPY ./server/src ./src

# Build the complete project
RUN ["cargo", "build"]

FROM node as node_build
COPY ./client /usr/src/client
WORKDIR /usr/src/client
RUN ["npm", "install", "-g", "create-react-app"]
RUN ["npm", "install"]
RUN ["npm", "run", "build"]

# Transfer binary from build container to the runtime container
# We can do this easily because Rust projects statically link
# and produce a single binary that runs "anywhere"(tm).
FROM debian:stretch
RUN apt-get update && apt-get install --no-install-recommends -y \
  libssl-dev \
  libssl1.1 \
  && rm -rf /var/lib/apt/lists/*
COPY --from=rust_build /usr/src/server/target/debug/murphytech_server /usr/src
COPY --from=node_build /usr/src/client/build /usr/src/static

# TODO: need to transfer the compiled client files over to the
# built container as well.

# Run the server
ENV RUST_BACKTRACE=1
CMD ["/usr/src/murphytech_server"]