use rocket::{
    http::Status,
    request::{Request, Outcome, FromRequest},
};

use models::User;
use schema::*;

#[derive(Debug)]
pub enum LoginError {
    NotLoggedIn,
}

impl<'a, 'r> FromRequest<'a, 'r> for User {
    type Error = LoginError;
    fn from_request(request: &'a Request<'r>) -> Outcome<User, Self::Error> {
        match request.cookies().get_private("user_id") {
            Some(cookie) => {
                unimplemented!()
            },
            None => {
                return Outcome::Failure((Status::Unauthorized, LoginError::NotLoggedIn));
            }
        }
    }

}