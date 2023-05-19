import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

const bookSchema = z.object({
  title: z.string().max(500),
  genre: z.string().max(255),
  rating: z.number().min(0).max(10),
  is_favorite: z.boolean(),
  is_current_read: z.boolean(),
  was_completed_before: z.boolean(),
});

const booksValidator = (req: Request, res: Response, next: NextFunction) => {
  try {
    bookSchema.parse(req.body);
    return next();
  } catch (err: any) {
    const validationError = fromZodError(err);
    return res.status(400).json(validationError.message);
  }
};

export type bookSchemaType = z.infer<typeof bookSchema>;
export default booksValidator;
