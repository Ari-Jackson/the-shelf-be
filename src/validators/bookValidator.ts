import { Request, Response, NextFunction } from "express";
import { ZodError, z } from "zod";
import { fromZodError } from "zod-validation-error";

const bookSchema = z.object({
  title: z.string(),
  format: z.string(),
  genre: z.string(),
  pages: z.number().positive(),
  rating: z.number(),
  theme: z.string(),
});

const booksValidator = (req: Request, res: Response, next: NextFunction) => {
  try {
    bookSchema.parse(req.body);
    return next();
  } catch (err: any) {
    const validationError = fromZodError(err);
    return res.status(400).json(validationError);
  }
};

export type bookSchemaType = z.infer<typeof bookSchema>;
export default booksValidator;
