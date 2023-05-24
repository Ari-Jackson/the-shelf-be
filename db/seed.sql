\c books_dev;

INSERT INTO books (title, categories, rating, is_favorite, is_current_read, was_completed_before) VALUES
('Percy Jackson 1', 'Juvenile Fiction', 9, true, false, true),
('Percy Jackson 2', 'Juvenile Fiction', 7, true, false, true),
('Percy Jackson 3', 'Juvenile Fiction', 8, true, false, true),
('Percy Jackson 4', 'Juvenile Fiction', 6, true, false, true),
('Percy Jackson 5', 'Juvenile Fiction', 9, true, false, true),
('Kane Chronicles 1', 'Juvenile Fiction', 5, false, false, false),
('Kane Chronicles 2', 'Juvenile Fiction', 6, false, false, false);

SELECT * FROM books;