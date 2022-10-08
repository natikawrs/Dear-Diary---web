import DiaryContainer from "../components/HomeForm/DiaryContainer";
import { toast } from "react-toastify";
import * as postService from "../api/postApi";
import { useEffect, useState } from "react";
import { useAuth } from "../../src/contexts/AuthContext";

function Home() {
  const {
    user: { id }
  } = useAuth();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await postService.getAllPosts(id);
        setPosts(res.data.posts);
      } catch (err) {
        console.log(err);
        toast.error(err.response?.data.message);
      }
    };
    fetchPost();
  }, []);
  return (
    <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
      <DiaryContainer posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default Home;
