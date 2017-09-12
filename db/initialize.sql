CREATE DATABASE news_app;
CREATE TABLE users 
    (
        user_id SERIAL PRIMARY KEY, 
        auth_id TEXT, 
        username VARCHAR(30), 
        email VARCHAR(80), 
        name VARCHAR(80), 
        img text
    );

CREATE TABLE news_source_look_up 
    (
        news_source_look_up_id SERIAL PRIMARY KEY,
        source_id VARCHAR(40),
        name VARCHAR(60),
        description TEXT,
        url TEXT,
        user_id INTEGER REFERENCES users
    );
