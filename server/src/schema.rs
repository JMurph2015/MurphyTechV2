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
