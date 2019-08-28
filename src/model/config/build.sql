BEGIN;
DROP TABLE IF EXISTS client,post CASCADE;

CREATE TABLE client (
  user_id  SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(30) UNIQUE NOT NULL,
  email VARCHAR(60) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  date_of_birth DATE NOT NULL,
  mobile_no INTEGER NOT NULL

);

CREATE TABLE post (
  post_id SERIAL PRIMARY KEY NOT NULL,
  category VARCHAR(60) NOT NULL,
  content VARCHAR NOT NULL,
  img_url  text,
  user_id INTEGER REFERENCES client (user_id)
);


COMMIT;