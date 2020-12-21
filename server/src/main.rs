#![feature(proc_macro_hygiene, decl_macro)]

extern crate chrono;
#[macro_use]
extern crate diesel;
extern crate dotenv;
#[macro_use]
extern crate rocket;
#[macro_use]
extern crate rocket_contrib;
extern crate serde;
extern crate serde_json;
#[macro_use]
extern crate serde_derive;


use diesel::prelude::*;
use diesel::pg::PgConnection;
use dotenv::dotenv;
use std::env;

pub mod models;
pub mod schema;


use rocket::{
    config::{Config, Environment, LoggingLevel},
    response::{status::NotFound, NamedFile},
};
use rocket_contrib::serve::StaticFiles;

#[database("murphydev-test")]
pub struct DbConn(diesel::PgConnection);

#[get("/")]
fn index() -> Result<NamedFile, NotFound<String>> {
    NamedFile::open("./static/index.html").map_err(|_| NotFound("Index Missing!".into()))
}

#[get("/users")]
pub fn get_users(conn: DbConn) -> Result<String> {
    return posts::table.limit(5).load::<Post>(&conn.0).map_err(|err| -> format!("Error querying
    users: {:?}", err))
}

fn main() {
    dotenv().ok();

    let config = Config::build(Environment::Staging)
        .log_level(LoggingLevel::Normal)
        .address("0.0.0.0")
        .port(8081)
        .finalize()
        .expect("Failed to build config");

    rocket::custom(config)
        .mount("/", routes![index])
        .mount("/index.html", StaticFiles::from("./static/index.html"))
        .mount("/favicon.ico", StaticFiles::from("./static/favicon.ico"))
        .mount("/static", StaticFiles::from("./static/static"))
        .mount("/assets", StaticFiles::from("./assets"))
        .attach(DbConn::fairing())
        .launch();
}
