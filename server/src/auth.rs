use super::schema::*;
use super::DbConn;
use diesel::prelude::*;



use diesel::dsl::*;





use rocket::{
    http::Status,
    request::{FromRequest, Outcome, Request},
};

use models::User;

const USER_ID: &str = "user_id";

#[derive(Debug)]
pub enum LoginError {
    NotLoggedIn,
    OtherError(String),
    DatabaseError(diesel::result::Error),
}

pub trait AuthScope: Sized + Default {
    type Column: diesel::query_source::Column;
    fn get_name() -> String {
        Self::Column::NAME.into()
    }
}

pub struct AuthPackage<T>
where
    T: AuthScope,
{
    user: User,
    scope: T,
}

impl<'a, 'r, T> FromRequest<'a, 'r> for AuthPackage<T>
where
    T: AuthScope,
{
    type Error = LoginError;
    fn from_request(request: &'a Request<'r>) -> Outcome<AuthPackage<T>, Self::Error> {
        match request.cookies().get_private(USER_ID) {
            Some(_cookie) => match request.guard::<DbConn>() {
                Outcome::Success(conn) => {
                    match users::table
                        .limit(2)
                        .load::<User>(&conn.0)
                        .map_err(|err| -> String {
                            return format!("Error querying users: {:?}", err);
                        }) {
                        Ok(mut u_list) => {
                            if u_list.len() > 1 {
                                return Outcome::Failure((
                                    Status::Unauthorized,
                                    LoginError::OtherError("Found duplicate user ids".into()),
                                ));
                            }
                            match u_list.pop() {
                                Some(u) => {
                                    match permissions::table
                                        .filter(sql(&(<T as AuthScope>::Column::NAME.to_owned()
                                            + " = true")))
                                        .count()
                                        .get_result::<i64>(&conn.0)
                                    {
                                        Ok(count) => {
                                            if count == 1 {
                                                return Outcome::Success(AuthPackage {
                                                    user: u,
                                                    scope: T::default(),
                                                });
                                            } else {
                                                return Outcome::Failure((
                                                    Status::Unauthorized,
                                                    LoginError::OtherError(
                                                        "Found duplicate user ids".into(),
                                                    ),
                                                ));
                                            }
                                        }
                                        Err(x) => {
                                            return Outcome::Failure((
                                                Status::Unauthorized,
                                                LoginError::DatabaseError(x),
                                            ));
                                        }
                                    }
                                }
                                None => {
                                    return Outcome::Failure((
                                        Status::Unauthorized,
                                        LoginError::OtherError("No such user".into()),
                                    ));
                                }
                            }
                        }
                        Err(x) => {
                            return Outcome::Failure((
                                Status::Unauthorized,
                                LoginError::OtherError(x),
                            ));
                        }
                    }
                }
                Outcome::Failure(_) => {
                    return Outcome::Failure((
                        Status::Unauthorized,
                        LoginError::OtherError("dbconn not found".into()),
                    ));
                }
                Outcome::Forward(_) => {
                    return Outcome::Failure((
                        Status::Unauthorized,
                        LoginError::OtherError("dbconn not found".into()),
                    ));
                }
            },
            None => {
                return Outcome::Failure((Status::Unauthorized, LoginError::NotLoggedIn));
            }
        }
    }
}

impl<'a, 'r> FromRequest<'a, 'r> for User {
    type Error = LoginError;
    fn from_request(request: &'a Request<'r>) -> Outcome<User, Self::Error> {
        match request.cookies().get_private("user_id") {
            Some(_cookie) => match request.guard::<DbConn>() {
                Outcome::Success(conn) => {
                    match users::table
                        .limit(2)
                        .load::<User>(&conn.0)
                        .map_err(|err| -> String {
                            return format!("Error querying users: {:?}", err);
                        }) {
                        Ok(mut u_list) => {
                            if u_list.len() > 1 {
                                return Outcome::Failure((
                                    Status::Unauthorized,
                                    LoginError::OtherError("Found duplicate user ids".into()),
                                ));
                            }
                            match u_list.pop() {
                                Some(u) => {
                                    return Outcome::Success(u);
                                }
                                None => {
                                    return Outcome::Failure((
                                        Status::Unauthorized,
                                        LoginError::OtherError("No such user".into()),
                                    ));
                                }
                            }
                        }
                        Err(x) => {
                            return Outcome::Failure((
                                Status::Unauthorized,
                                LoginError::OtherError(x),
                            ));
                        }
                    }
                }
                Outcome::Failure(_) => {
                    return Outcome::Failure((
                        Status::Unauthorized,
                        LoginError::OtherError("dbconn not found".into()),
                    ));
                }
                Outcome::Forward(_) => {
                    return Outcome::Failure((
                        Status::Unauthorized,
                        LoginError::OtherError("dbconn not found".into()),
                    ));
                }
            },
            None => {
                return Outcome::Failure((Status::Unauthorized, LoginError::NotLoggedIn));
            }
        }
    }
}
