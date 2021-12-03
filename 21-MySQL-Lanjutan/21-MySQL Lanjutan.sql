# Annisa Winnie Ardianti | 20 | ASEAN Youth Organization

# Technical Assignment MySQL-Lanjutan


# Membuat Database skilvulbookstore

CREATE DATABASE skilvulbookstore;


# Menggunakan Database skilvulbookstore

USE skilvulbookstore;


# Membuat Table penerbit

CREATE TABLE penerbit
(
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50) NULL,
    kota VARCHAR(50) NULL
);


# Membuat Table penulis

CREATE TABLE penulis
(
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50) NULL,
    kota VARCHAR(50) NULL
);



# Membuat Table buku

CREATE TABLE buku
(
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ISBN VARCHAR(50) NULL,
    judul VARCHAR(50) NULL,
    penulis INT(10) NULL,
    penerbit INT(10) NULL,
    harga INT(10) NULL,
    stock INT(10) NULL,
    
    CONSTRAINT `buku_penulis` FOREIGN KEY (penulis) REFERENCES penulis (id),
    CONSTRAINT `buku_penerbit` FOREIGN KEY (penerbit) REFERENCES penerbit (id)
    
);



# Insert Data pada Tabel penerbit

INSERT INTO penerbit(nama, kota)
VALUES ('Gramedia', 'Bandung'),
       ('Grasindo', 'Jakarta'),
       ('Java Book Indonesia', 'Jakarta')
;

SELECT * FROM penerbit;


# Insert Data pada Tabel penulis

INSERT INTO penulis(nama, kota)
VALUES ('Andrea Hirata', 'Belitung'),
       ('Asma Nadia', 'Bandung'),
       ('Dewi Lestari', 'Bandung')
;

SELECT * FROM penulis;


# Insert dan Select Data dari tabel buku

INSERT INTO buku(ISBN, judul, penulis, penerbit, harga, stock)
VALUES ('ISBN-01', 'English Practice', 1, 2, 70000, 100),
       ('ISBN-02', 'Korean Practice', 2, 1, 80000, 100)
;


# INNER JOIN tabel buku dan tabel penerbit

SELECT buku.id, buku.ISBN, buku.judul, penerbit.nama, penerbit.kota
FROM buku 
    INNER JOIN penerbit ON buku.penerbit = penerbit.id;



# LEFT JOIN tabel buku dan tabel penerbit

SELECT buku.id, buku.ISBN, buku.judul, penerbit.nama, penerbit.kota
FROM buku 
    LEFT JOIN penerbit ON buku.penerbit = penerbit.id;
    


# RIGHT JOIN tabel buku dan tabel penerbit

SELECT buku.id, buku.ISBN, buku.judul, penerbit.nama, penerbit.kota
FROM buku 
    RIGHT JOIN penerbit ON buku.penerbit = penerbit.id;



# Cek Nilai MAX dari column harga pada table book yang memiliki jumlah stok buku di bawah 10

SELECT MAX(harga) FROM buku WHERE stock < 10;


# Cek nilai MIN dari column harga pada table book

SELECT MIN(harga) FROM buku;


# COUNT untuk melihat list data dengan kondisi harga buku di bawah 100000

SELECT COUNT(*) FROM buku WHERE harga < 100000;
