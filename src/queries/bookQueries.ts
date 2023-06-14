import { ParsedQs } from "qs";
import db from "../../db/dbConfig";
import { type bookSchemaType } from "../validators/bookValidator.js";

const getAllBooks = async (order?: ParsedQs[string]) => {
  let baseQuery = "SELECT * FROM books ";
  if (!!order) {
    if (order.toString().toLowerCase() === "desc") {
      baseQuery += "ORDER BY name DESC";
    }
    if (order.toString().toLowerCase() === "asc") {
      baseQuery += "ORDER BY name ASC";
    }
  } else {
    baseQuery += "ORDER BY authors,id ASC";
  }

  try {
    const result = await db.any(`${baseQuery};`);
    return { result };
  } catch (error) {
    return { error };
  }
};

const getOneBook = async (id: string) => {
  try {
    const result = await db.one("SELECT * FROM books WHERE id=$1;", id);
    return { result };
  } catch (error) {
    return { error };
  }
};

const createOneBook = async (newBookInfo: bookSchemaType) => {
  try {
    const result = await db.any(
      "INSERT INTO books(title, rating, categories, was_completed_before, is_current_read, is_favorite, google_books_id, authors, description, page_count, image_link, number_of_completions) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *;",
      [
        newBookInfo.title,
        newBookInfo.rating,
        newBookInfo.categories,
        newBookInfo.was_completed_before,
        newBookInfo.is_current_read,
        newBookInfo.is_favorite,
        newBookInfo.google_books_id,
        newBookInfo.authors,
        newBookInfo.description,
        newBookInfo.page_count,
        newBookInfo.image_link,
        newBookInfo.number_of_completions,
      ]
    );
    return { result };
  } catch (error) {
    return { error };
  }
};

const updateOneBook = async (id: string, newBookInfo: bookSchemaType) => {
  try {
    const result = await db.one(
      "UPDATE books SET title=$1, rating=$2, categories=$3, was_completed_before=$4, is_current_read=$5, is_favorite=$6, google_books_id=$7, authors=$8, description=$9, page_count=$10, image_link=$11, number_of_completions=$12, review=$13 WHERE id=$14 RETURNING *;",
      [
        newBookInfo.title,
        newBookInfo.rating,
        newBookInfo.categories,
        newBookInfo.was_completed_before,
        newBookInfo.is_current_read,
        newBookInfo.is_favorite,
        newBookInfo.google_books_id,
        newBookInfo.authors,
        newBookInfo.description,
        newBookInfo.page_count,
        newBookInfo.image_link,
        newBookInfo.number_of_completions,
        newBookInfo.review,
        id,
      ]
    );
    return { result };
  } catch (error) {
    return { error };
  }
};

const updateOneReview = async (id: string, newBookInfo: bookSchemaType) => {
  try {
    const result = await db.one(
      "UPDATE books SET review=$1 WHERE id=$2 RETURNING *;",
      [newBookInfo.review, id]
    );
    return { result };
  } catch (error) {
    return { error };
  }
};

const deleteOneBook = async (id: string) => {
  try {
    const result = await db.oneOrNone(
      "DELETE FROM books WHERE id=$1 RETURNING *;",
      id
    );
    return { result };
  } catch (error) {
    return { error };
  }
};

export {
  getAllBooks,
  getOneBook,
  createOneBook,
  deleteOneBook,
  updateOneBook,
  updateOneReview,
};
