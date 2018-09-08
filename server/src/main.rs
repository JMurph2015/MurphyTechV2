#![feature(plugin)]
#![feature(decl_macro)]
#![plugin(rocket_codegen)]

extern crate rocket;
extern crate rocket_contrib;

use rocket::{
    config::{Config, Environment, LoggingLevel},
    response::{
        NamedFile,
        status::{NotFound}
    },
};
use rocket_contrib::static_files::StaticFiles;

#[get("/")]
fn index() -> Result<NamedFile, NotFound<String>> {
    NamedFile::open("./static/index.html")
        .map_err(|_| NotFound("Index Missing!".into()))
}

fn main() {
    let config = Config::build(Environment::Staging)
        .log_level(LoggingLevel::Normal)
        .address("0.0.0.0")
        .port(80)
        .finalize()
        .expect("Failed to build config");

    rocket::custom(config)
        .mount("/", routes![index])
        .mount("/index.html", StaticFiles::from("./static/index.html"))
        .mount("/favicon.ico", StaticFiles::from("./static/favicon.ico"))
        .mount("/static", StaticFiles::from("./static/static"))
        .mount("/assets", StaticFiles::from("./assets"))
        .launch();
}
