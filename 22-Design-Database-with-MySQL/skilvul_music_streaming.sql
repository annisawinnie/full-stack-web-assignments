# Annisa Winnie Ardianti | 20 | ASEAN Youth Organization


CREATE DATABASE skilvul_music_streaming;

USE skilvul_music_streaming;
 
 
 CREATE TABLE users(
 user_id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(40) NOT NULL,
 email VARCHAR (255) NOT NULL UNIQUE,
 password TEXT NOT NULL
 );
 
 
 DESC users;
 
 CREATE TABLE singers(
 singer_id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(40) NOT NULL
 );
 
 SHOW TABLES;
 
 DESC singers;
 
 CREATE TABLE albums(
 album_id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(255) NOT NULL,
 singer_id INT NOT NULL,
 CONSTRAINT fk_singers_singer_id 
 FOREIGN KEY(singer_id) 
 REFERENCES singers(singer_id)
 );
 
 DESC albums;
 
 CREATE TABLE tracks(
 track_id INT AUTO_INCREMENT PRIMARY KEY,
 title VARCHAR(255) NOT NULL,
 singer_id INT NOT NULL,
 album_id INT NOT NULL,
 CONSTRAINT fk_tablesingers_singer_id 
	FOREIGN KEY(singer_id) 
	REFERENCES singers(singer_id),
 CONSTRAINT fk_albums_album_id 
	FOREIGN KEY(album_id) 
	REFERENCES albums(album_id)
 );
 
  DESC tracks;
  
 CREATE TABLE playlist(
 playlist_id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(255) NOT NULL,
 user_id INT NOT NULL,
 CONSTRAINT fk_users_user_id 
 FOREIGN KEY(user_id) 
 REFERENCES users(user_id)
 );
 
 DESC playlist;
 
 CREATE TABLE track_playlist(
 track_id INT NOT NULL,
 playlist_id INT NOT NULL,
 
 CONSTRAINT track_id_key_reff
	FOREIGN KEY(track_id)
    REFERENCES tracks(track_id),
 CONSTRAINT playlist_id_key_reff
	FOREIGN KEY(playlist_id)
    REFERENCES playlist(playlist_id)
 );
 
 SHOW TABLES;
 
