DROP DATABASE IF EXISTS app_db;

CREATE DATABASE app_db;

USE app_db;

DROP TABLE IF EXISTS couples;
DROP TABLE IF EXISTS activities;

CREATE TABLE couples (
    username VARCHAR(100) NOT NULL
  , hash VARCHAR(256) NOT NULL
  , person_1_last_name VARCHAR(256) NOT NULL
  , person_1_first_name VARCHAR(256) NOT NULL

  , person_2_last_name VARCHAR(256) NOT NULL
  , person_2_first_name VARCHAR(256) NOT NULL

  , email VARCHAR(256)
  , phone VARCHAR(256)
  , photo_filepath VARCHAR(256)

  , PRIMARY KEY(username)
);

CREATE TABLE activities (
    activity_id INT NOT NULL AUTO_INCREMENT
  , username VARCHAR(100) NOT NULL
  , activity VARCHAR(256) NOT NULL
  , activity_date DATE NOT NULL

  , PRIMARY KEY(activity_id)
);
