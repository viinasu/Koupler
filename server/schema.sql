DROP DATABASE IF EXISTS app_db;

CREATE DATABASE app_db;

USE app_db;

DROP TABLE IF EXISTS couples;
DROP TABLE IF EXISTS activities;
DROP TABLE IF EXISTS couples_activities;
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS photos;
DROP TABLE IF EXISTS total_messages;
DROP TABLE IF EXISTS messages;


/********* TABLE COUPLES *********/

-- all couples

CREATE TABLE couples (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(16) NOT NULL,
  hash VARCHAR(256) NOT NULL,
  person1_last_name VARCHAR(32) NOT NULL,
  person1_first_name VARCHAR(32) NOT NULL,
  person2_last_name VARCHAR(32) NOT NULL,
  person2_first_name VARCHAR(32) NOT NULL,
  email VARCHAR(64) NOT NULL,
  phone_number INT(10) NOT NULL,
  likes INT(10) NOT NULL,
  about_us VARCHAR(4096) NOT NULL,
  path_profile_pic VARCHAR(128) NOT NULL,
  PRIMARY KEY(id)
);


/********* TABLE ACTIVITIES *********/

-- all activities

CREATE TABLE activities (
  id INT NOT NULL AUTO_INCREMENT,
  activity_name VARCHAR(32) NOT NULL,
  activity_type VARCHAR(32) NOT NULL,
  PRIMARY KEY(id)
);


/********* TABLE COUPLES_ACTIVITIES *********/

-- Intersection table between couples and activities

CREATE TABLE couples_activities (
  couples_id INT NOT NULL,
  activities_id INT NOT NULL
);

ALTER TABLE couples_activities
ADD CONSTRAINT couples_activities_fk0
FOREIGN KEY (couples_id)
REFERENCES couples(id)

ALTER TABLE couples_activities
ADD CONSTRAINT couples_activities_fk1
FOREIGN KEY (activities_id)
REFERENCES activities(id)


/********* TABLE EVENTS *********/

-- All events the two couples did together

CREATE TABLE events (
  id INT NOT NULL AUTO_INCREMENT,
  date DATE NOT NULL,
  activities_id INT NOT NULL,
  couples_id INT NOT NULL,
  photos_id INT NOT NULL,
  comments VARCHAR(4096),
  PRIMARY KEY(id)
);

ALTER TABLE events
ADD CONSTRAINT events_fk0
FOREIGN KEY (activities_id)
REFERENCES activities(id)

ALTER TABLE events
ADD CONSTRAINT events_fk1
FOREIGN KEY (couples_id)
REFERENCES couples(id)

ALTER TABLE events
ADD CONSTRAINT events_fk2
FOREIGN KEY (photos_id)
REFERENCES photos(id)


/********* TABLE PHOTOS *********/

-- Path and metadata for all photos

CREATE TABLE photos (
  id INT NOT NULL AUTO_INCREMENT,
  couples_id INT NOT NULL,
  photo_tags varchar(16) NOT NULL,
  photo_path VARCHAR(100) NOT NULL,
  photo_notes VARCHAR(1024),
  public TINYINT NOT NULL,
  PRIMARY KEY(id)
)

ALTER TABLE photos
ADD CONSTRAINT photos_fk0
FOREIGN KEY (couples_id)
REFERENCES couples(id)


/********* TABLE TOTAL_MESSAGES *********/

-- Store the total number of messages sent between users

CREATE TABLE total_messages (
/*
  identifier: unique key for conversation between specific couples.
              First couples_id + second couples_id, separated by a colon.
              Example identifier: couples_id3:couples_id5
*/
  identifier VARCHAR(256) NOT NULL,
  total_messages INT(10) NOT NULL,

  PRIMARY KEY(identifier)
);


/********* TABLE MESSAGES *********/

-- Store each individual messages between users

CREATE TABLE messages (
  identifier_message_number VARCHAR(256) NOT NULL,
  message VARCHAR(4096) NOT NULL,
  created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  from int NOT NULL,

  PRIMARY KEY(identifier_message_number)
);

ALTER TABLE messages
ADD CONSTRAINT messages_fk0
FOREIGN KEY (from)
REFERENCES couples(id)

