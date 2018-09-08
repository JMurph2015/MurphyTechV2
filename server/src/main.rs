extern crate rocket;
extern crate rocket_contrib;

use rocket::config::{Config, Environment, LoggingLevel};
use rocket_contrib::static_files::StaticFiles;

fn main() {
    let config = Config::build(Environment::Staging)
        .log_level(LoggingLevel::Normal)
        .address("0.0.0.0")
        .port(80)
        .finalize()
        .expect("Failed to build config");

    rocket::custom(config)
        .mount("/", StaticFiles::from("./static"))
        .launch();
}
