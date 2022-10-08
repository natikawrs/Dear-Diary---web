import Joi from "joi";

const updateProfileSchema = Joi.object({
  userName: Joi.string().required(),

  profileImage: Joi.allow(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,16}$")).required(),
  confirmPassword: Joi.ref("password")
}).with("password", "confirmPassword");

export const validateUpdateProfile = (input) =>
  updateProfileSchema.validate(input, { abortEarly: false });
