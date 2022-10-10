import axios from "../config/axios";

export const createPost = (input) => axios.post("/posts", input);
export const updatePost = (id, input) => axios.patch(`/posts/${id}/`, input);
export const deletePost = (id) => axios.delete(`/posts/${id}/`);
export const getPost = (postId) => axios.get(`/posts/${postId}/`);
export const getAllPosts = (userId) => axios.get(`/users/${userId}/posts/`);

export const deleteDiaryImg = (postId) =>
  axios.delete(`/posts/diaryImg/${postId}`);
