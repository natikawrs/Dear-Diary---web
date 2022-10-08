import Joi from "joi";

const postSchema = Joi.object({
  date: Joi.string().required(),
  mood: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  image: Joi.allow()
});

export const validatePost = (input) =>
  postSchema.validate(input, { abortEarly: false });
