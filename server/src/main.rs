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
use dotenv::dotenv;
use rocket::{
    response::{status::NotFound, NamedFile},
};
use rocket_contrib::json::Json;
use rocket_contrib::serve::StaticFiles;

pub mod models;
pub mod schema;
pub mod routes;
pub mod auth;

use models::*;
use schema::*;

#[database("main")]
pub struct DbConn(diesel::PgConnection);

#[get("/")]
fn index() -> Result<NamedFile, NotFound<String>> {
    NamedFile::open("./static/index.html").map_err(|_| NotFound("Index Missing!".into()))
}

#[get("/users")]
pub fn get_users(conn: DbConn) -> Result<Json<Vec<User>>, String> {
    return match users::table
        .limit(5)
        .load::<User>(&conn.0)
        .map_err(|err| -> String { return format!("Error querying users: {:?}", err) })
    {
        Ok(u) => Ok(Json(u)),
        Err(x) => Err(x),
    };
}


fn main() {
    dotenv().ok();

    println!("Hello Rocket!");

    rocket::ignite()
        .mount("/", routes![index])
        .mount(
            "/api",
            routes::messages::get_message_routes()
        )
        .mount("/index.html", StaticFiles::from("./static/index.html"))
        .mount("/favicon.ico", StaticFiles::from("./static/favicon.ico"))
        .mount("/static", StaticFiles::from("./static/static"))
        .mount("/assets", StaticFiles::from("./assets"))
        .attach(DbConn::fairing())
        .launch();
}
