table! {
    messages (id) {
        id -> Int4,
        body -> Varchar,
    }
}

table! {
    users (id) {
        id -> Int4,
        username -> Varchar,
        given_name -> Varchar,
        family_name -> Varchar,
        password_hash -> Varchar,
        admin -> Bool,
    }
}

allow_tables_to_appear_in_same_query!(
    messages,
    users,
);
