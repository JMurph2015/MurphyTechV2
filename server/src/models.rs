use super::schema::*;

#[derive(Queryable, Serialize, Deserialize)]
pub struct User {
    pub id: i32,
    pub username: String,
    pub given_name: String,
    pub family_name: String,
    #[serde(skip_serializing)]
    pub password_hash: String,
    pub admin: bool,
}

#[derive(Clone, Queryable, AsChangeset, Serialize, Deserialize)]
pub struct Message {
    pub id: i32,
    pub body: String,
}

#[derive(Insertable, Serialize, Deserialize)]
#[table_name="messages"]
pub struct NewMessage {
    pub body: String,
}