import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

const reviewSchema = z.object({
  review: z.string(),
});

const reviewValidator = (req: Request, res: Response, next: NextFunction) => {
  try {
    reviewSchema.parse(req.body);
    return next();
  } catch (err: any) {
    const validationError = fromZodError(err);
    return res.status(400).json(validationError.message);
  }
};

export type reviewSchemaType = z.infer<typeof reviewSchema>;
export default reviewValidator;
