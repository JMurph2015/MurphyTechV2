-- Your SQL goes here
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    given_name VARCHAR NOT NULL,
    family_name VARCHAR NOT NULL,
    password_hash VARCHAR NOT NULL,
    admin BOOLEAN NOT NULL DEFAULT 'f'
)
