DROP DATABASE IF EXISTS app_db;

CREATE DATABASE app_db;

USE app_db;

DROP TABLE IF EXISTS couples;
DROP TABLE IF EXISTS activities;
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

CREATE TABLE events (
  event_id INT NOT NULL AUTO_INCREMENT,
  date DATE NOT NULL,
  actiities_id INT NOT NULL,
  couples_id INT NOT NULL,
  photos_id INT NOT NULL,
  comments TEXT,

  PRIMARY KEY(even_id)
);

CREATE TABLE photos (
  photos_id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  user_tags INT NOT NULL,
  photo_path VARCHAR(100) NOT NULL,
  comments VARCHAR(1280),
  public TINYINT NOT NULL,

  PRIMARY KEY(photos_id)
)

-- Store the total number of messages sent between users
CREATE TABLE total_messages (
/*
  identifier: unique key for conversation between specific users
              First user_id + second user_id, separated by a colon.
              Example identifier: user_id3:user_id5
              Verify at signup that usernames do not have a colon
*/
  identifier VARCHAR(256) NOT NULL,
  total_messages INT NOT NULL,

  PRIMARY KEY(identifier)
);

-- Store each individual messages between users
CREATE TABLE messages (
  identifier_message_number VARCHAR(128) NOT NULL,
  message TEXT NOT NULL,
  created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  from VARCHAR(16) NOT NULL,

  PRIMARY KEY(identifier_message_number)
);
