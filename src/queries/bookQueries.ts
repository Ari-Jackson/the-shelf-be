import { ParsedQs } from "qs";
import db from "../../db/dbConfig";
import { type bookSchemaType } from "../validators/bookValidator.js";

const getAllBooks = async (order?: ParsedQs[string]) => {
  let baseQuery = "SELECT * FROM books";
  if (!!order) {
    if (order.toString().toLowerCase() === "desc") {
      baseQuery += " ORDER BY name DESC";
    }
    if (order.toString().toLowerCase() === "asc") {
      baseQuery += " ORDER BY name ASC";
    }
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
      "INSERT INTO books(title, format, genre, pages, rating, theme) VALUES($1, $2, $3, $4, $5, $6) RETURNING *;",
      [
        newBookInfo.title,
        newBookInfo.format,
        newBookInfo.genre,
        newBookInfo.pages,
        newBookInfo.rating,
        newBookInfo.theme,
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
      "UPDATE books SET title=$1, format=$2, genre=$3, pages=$4, rating=$5, theme=$6 WHERE id=$7 RETURNING *;",
      [
        newBookInfo.title,
        newBookInfo.format,
        newBookInfo.genre,
        newBookInfo.pages,
        newBookInfo.rating,
        newBookInfo.theme,
        id,
      ]
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

export { getAllBooks, getOneBook, createOneBook, deleteOneBook, updateOneBook };
