DROP DATABASE IF EXISTS books_dev;
CREATE DATABASE books_dev;

\c books_dev;

CREATE TABLE books (
 id SERIAL PRIMARY KEY,
 title VARCHAR(500) NOT NULL,
 genre VARCHAR(255) NOT NULL,
 rating INT CHECK (rating >= 0 AND rating <= 10),
 is_favorite BOOLEAN,
 is_current_read BOOLEAN,
 was_completed_before BOOLEAN
);

-- CREATE TABLE book_progress(
--     progress INT CHECK (progress > 0 AND progress <= 100),
--     has_been_completed BOOLEAN,
--     number_of_completions INT CHECK (number_of_completions >= 0),
-- );

\d books;