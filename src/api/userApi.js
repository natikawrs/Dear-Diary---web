import axios from "../config/axios";

export const updateUser = (input) => axios.patch("/users", input);
export const deleteProfileImg = () => axios.delete("/users/profileImg");
