#[derive(Queryable)]
pub struct User {
    pub id: i32,
    pub username: String,
    pub given_name: String,
    pub family_name: String,
    pub password_hash: String,
    pub admin: bool,
}

