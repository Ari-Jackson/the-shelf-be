\c books_dev;

INSERT INTO books (title, genre, rating, is_favorite, is_current_read, was_completed_before) VALUES
('Percy Jackson 1', 'YA/Fantasy', 9, true, false, true),
('Percy Jackson 2', 'YA/Fantasy', 7, true, false, true),
('Percy Jackson 3', 'YA/Fantasy', 8, true, false, true),
('Percy Jackson 4', 'YA/Fantasy', 6, true, false, true),
('Percy Jackson 5', 'YA/Fantasy', 9, true, false, true),
('Kane Chronicles 1', 'YA/Fantasy', 5, false, false, false),
('Kane Chronicles 2', 'YA/Fantasy', 6, false, false, false);

SELECT * FROM books;