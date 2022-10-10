import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as postService from "../../api/postApi";

function DiaryContent({ post }) {
  const navigate = useNavigate();

  const deletePost = async () => {
    await postService.deletePost(post.id);
    navigate("/");
  };
  const handleClickDelete = async (e) => {
    try {
      e.preventDefault();
      await deletePost(post.id);
      toast.success("success delete");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  return (
    <div
      className="d-flex align-items-center text-secondary  fw-bolder "
      onClick={() => navigate(`/post/${post.id}`)}
    >
      <span className="flex-fill" role="button">
        {post.date}
      </span>
      <span className="flex-fill" role="button">
        {post.mood}
      </span>
      <span className="flex-fill" role="button">
        {post.title}
      </span>
      <div className="btn-group">
        <button
          className="btn btn-outline-secondary"
          onClick={handleClickDelete}
        >
          <i className="fa-regular fa-trash-can" />
        </button>
      </div>
    </div>
  );
}

export default DiaryContent;
