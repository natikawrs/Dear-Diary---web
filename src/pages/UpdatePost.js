import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import UpdateForm from "../components/UpdateForm";
import * as postService from "../api/postApi";
import { useParams } from "react-router-dom";

function UpdatePost() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await postService.getPost(id);
        setPost(res.data.posts);
      } catch (err) {
        console.log(err);
        toast.error(err.response?.data.message);
      }
    };
    fetchPost();
  }, [id]);
  return <UpdateForm post={post} setPost={setPost} />;
}

export default UpdatePost;
