# 20 | Annisa Winnie Ardianti | ASEAN Youth Organization 

-- Show Databases --
SHOW DATABASES;

-- Create Database --
CREATE DATABASE bookstore;

-- Use Database -- 
USE bookstore;

-- Show All Table --
SHOW TABLES;

-- Create Table --
CREATE TABLE books (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
author1 VARCHAR(100) NOT NULL,
author2 VARCHAR(100) NULL,
author3 VARCHAR(100) NULL,
title VARCHAR(100) NULL,
description TEXT NULL,
place_sell CHAR(3) NULL,
stock INT DEFAULT 0,
creation_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Update Add Column --
ALTER TABLE books 
ADD COLUMN price INT DEFAULT 0;

ALTER TABLE books 
ADD COLUMN status ENUM('available', 'out of stock', 'limited');

-- Drop Column --
ALTER TABLE books
DROP COLUMN place_sell;

-- Insert Data --
INSERT INTO books(author1, author2, author3, title, description, stock, price, status)
VALUES
('Annisa', 'Winnie', 'Ardianti', 'English Practice', 'English Practice Book', 10, 50000, 'available'),
('Sania', 'Anggi', 'Fazri', 'Korean Practice', 'Korean Practice Book', 5, 60000, 'limited'),
('Renis', 'Renur', 'Kenand', 'Japanise Practice', 'Japanise Practice Book', 0, 70000, 'out of stock');


-- Select All Row --
SELECT * FROM books;

-- Select Alias -- 
SELECT id AS ID,
	   author1 AS A1,
       author2 AS A2,
       author3 AS A3
       FROM books;
       
-- Select Data Where id --
SELECT * FROM books WHERE id = 1;

-- Select Data Where Operator Logical AND --
SELECT * FROM books WHERE price > 60000 AND price <= 70000;

-- Select Data Where Operator Logical OR --
SELECT * FROM books WHERE stock = 5 OR stock = 10;

-- Select Data Where Operator Logical NOT --
SELECT * FROM books WHERE NOT status = 'available';

-- Select Data Order By id ASC --
SELECT * FROM books ORDER BY id ASC;

-- Select Data Limit 2 Row --
SELECT * FROM books LIMIT 2;

-- Update Row --
UPDATE books 
SET author1 = 'Sania Wulan',
price = 65000
WHERE id = 2;

-- Delete Row --
DELETE FROM books WHERE id = 3;



