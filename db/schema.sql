DROP DATABASE IF EXISTS books_dev;
CREATE DATABASE books_dev;

\c books_dev;

CREATE TABLE books (
 id SERIAL PRIMARY KEY,
 title TEXT,
 categories TEXT,
 rating INT CHECK (rating >= 0 AND rating <= 10),
 is_favorite BOOLEAN NOT NULL DEFAULT FALSE,
 is_current_read BOOLEAN NOT NULL DEFAULT FALSE,
 was_completed_before BOOLEAN NOT NULL DEFAULT FALSE,
 number_of_completions INT NOT NULL DEFAULT 0,
 google_books_id TEXT NOT NULL DEFAULT '',
 authors TEXT NOT NULL DEFAULT '',
 description TEXT NOT NULL DEFAULT '',
 page_count INT NOT NULL DEFAULT 0,
 image_link TEXT NOT NULL DEFAULT ''
);

-- CREATE TABLE book_progress(
--     progress INT CHECK (progress > 0 AND progress <= 100),
--     number_of_completions INT CHECK (number_of_completions >= 0),
-- );

\d books;