DROP DATABASE IF EXISTS books_dev;
CREATE DATABASE books_dev;

\c books_dev;

CREATE TABLE books (
 id SERIAL PRIMARY KEY,
 title TEXT NOT NULL,
 format TEXT,
 genre VARCHAR(255),
 pages INT,
 theme VARCHAR(255) DEFAULT 'General',
 rating INT CHECK (rating >= 0 AND rating <= 10)
);

\d books;