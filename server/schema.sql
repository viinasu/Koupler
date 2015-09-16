DROP DATABASE IF EXISTS app_db;

CREATE DATABASE app_db;

USE app_db;

DROP TABLE IF EXISTS couples;
DROP TABLE IF EXISTS activities;
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS photos;
DROP TABLE IF EXISTS total_messages;
DROP TABLE IF EXISTS messages;

CREATE TABLE couples (
  user_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(16) NOT NULL,
  hash VARCHAR(256) NOT NULL,
  person_1_last_name VARCHAR(32) NOT NULL,
  person_1_first_name VARCHAR(32) NOT NULL,
  person_2_last_name VARCHAR(32) NOT NULL,
  person_2_first_name VARCHAR(32) NOT NULL,

  email VARCHAR(64),
  phone INT(10),
  about_us VARCHAR(4096),

  PRIMARY KEY(user_id)
);

CREATE TABLE activities (
  activity_id INT NOT NULL AUTO_INCREMENT,
  activity_name VARCHAR(32) NOT NULL,
  activity_type VARCHAR(32) NOT NULL,

  PRIMARY KEY(activity_id)
);
