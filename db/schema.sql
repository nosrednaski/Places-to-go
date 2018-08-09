CREATE DATABASE places_db;
USE places_db;

CREATE TABLE places
(
	id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
	place_name varchar(255) NOT NULL,
	been_there BOOLEAN DEFAULT false
);
