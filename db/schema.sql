DROP DATABASE IF EXISTS books_dev;
CREATE DATABASE books_dev;

\c books_dev;

CREATE TABLE books (
 id SERIAL PRIMARY KEY,
 title TEXT,
 rating INT CHECK (rating >= 0 AND rating <= 10),
 categories TEXT,
 was_completed_before BOOLEAN NOT NULL DEFAULT FALSE,
 is_current_read BOOLEAN NOT NULL DEFAULT FALSE,
 is_favorite BOOLEAN NOT NULL DEFAULT FALSE,
 google_books_id TEXT NOT NULL DEFAULT '',
 authors TEXT NOT NULL DEFAULT '',
 description TEXT NOT NULL DEFAULT '',
 page_count INT NOT NULL DEFAULT 0,
 image_link TEXT NOT NULL DEFAULT '',
 number_of_completions INT NOT NULL DEFAULT 0,
 review TEXT NOT NULL DEFAULT ''
);

\d books;