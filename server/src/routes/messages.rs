use diesel::prelude::*;
use diesel::query_builder::QueryFragment;
use rocket::{http::Status, Route};
use rocket_contrib::json::Json;

use super::super::models::*;
use super::super::schema::*;
use super::super::DbConn;
use crate::auth::{AuthPackage, AuthScope};

use diesel::pg::Pg;

pub fn get_message_routes() -> Vec<Route> {
    //routes![create_message]
    routes![get_messages, update_message, delete_message]
}

#[get("/messages")]
pub fn get_messages(conn: DbConn) -> Result<Json<Vec<Message>>, String> {
    return match messages::table
        .limit(20)
        .load::<Message>(&conn.0)
        .map_err(|err| -> String { return format!("Error querying users: {:?}", err) })
    {
        Ok(u) => Ok(Json(u)),
        Err(x) => Err(x),
    };
}

pub type CreateMessageAuthScope = ();
impl AuthScope for CreateMessageAuthScope {
    type Column = permissions::create_message_scope;
}

#[post("/messages", data = "<message>")]
pub fn create_message(
    message: Json<NewMessage>,
    conn: DbConn,
    auth: AuthPackage<CreateMessageAuthScope>,
) -> Json<Message> {
    Json(
        diesel::insert_into(messages::table)
            .values(&message.into_inner())
            .get_result(&*conn)
            .expect(""),
    )
}

#[delete("/messages/<id>")]
pub fn delete_message(id: i32, conn: DbConn) -> Result<Status, Status> {
    match diesel::delete(messages::table.filter(messages::id.eq(id))).execute(&*conn) {
        Ok(x) => {
            if x == 1 {
                return Ok(Status::Ok);
            } else if x == 0 {
                return Err(Status::NotFound);
            } else {
                return Err(Status::InternalServerError);
            }
        }
        Err(_) => Err(Status::InternalServerError),
    }
}

#[put("/messages/<id>", data = "<message>")]
pub fn update_message(
    id: i32,
    message: Json<Message>,
    conn: DbConn,
) -> Result<Json<Message>, Status> {
    match diesel::update(messages::table.find(id))
        .set(&*message)
        .execute(&*conn)
    {
        Ok(x) => {
            if x == 1 {
                return Ok(message);
            } else if x == 0 {
                return Err(Status::NotFound);
            } else {
                return Err(Status::InternalServerError);
            }
        }
        Err(_) => Err(Status::InternalServerError),
    }
}
