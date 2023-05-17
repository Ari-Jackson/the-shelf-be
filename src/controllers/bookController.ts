import express from "express";
import {
  getAllBooks,
  getOneBook,
  createOneBook,
  deleteOneBook,
  updateOneBook,
} from "../queries/bookQueries";
import bookValidator from "../validators/bookValidator";

const bookRouter = express.Router();

bookRouter
  .route("/")
  .get(async (req, res) => {
    const { error, result } = await getAllBooks();
    if (!!error) {
      res.status(500).json({ error });
    } else {
      res.status(200).json(result);
    }
  })
  .post(bookValidator, async (req, res) => {
    const { error, result } = await createOneBook(req.body);
    if (!!error) {
      res.status(500).json({ Error: result });
    } else {
      res.status(201).json(result);
    }
  });

bookRouter
  .route("/:id")
  .get(async (req, res) => {
    const { id } = req.params;
    const { error, result } = await getOneBook(id);
    if (!!error) {
      res.status(404).json({ error: "bookmark not found" });
    } else {
      res.status(200).json(result);
    }
  })
  .put(bookValidator, async (req, res) => {
    const { id } = req.params;
    const { error, result } = await updateOneBook(id, req.body);
    if (!!error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(200).json(result);
    }
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const { error, result } = await deleteOneBook(id);
    if (!!error) {
      res.status(404).json("Bookmark not found");
    } else {
      res.status(201).json(result);
    }
  });

export default bookRouter;
