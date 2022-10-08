import { toast } from "react-toastify";
import { useState, useRef, useEffect } from "react";
import * as postService from "../api/postApi";
import { useNavigate } from "react-router-dom";
import uploadImg from "../images/uploadImg.png";
// import { validatePost } from "../validations/postValidate";

function UpdateForm({ post }) {
  const [input, setInput] = useState({});

  useEffect(() => {
    setInput({
      date: post?.date,
      mood: post?.mood,
      title: post?.title,
      content: post?.content,
      image: post?.image
    });
  }, [post]);

  const navigate = useNavigate();

  const updatePost = async (input) => {
    await postService.updatePost(post.id, input);
    navigate("/");
  };

  const deletePost = async () => {
    await postService.deletePost(post.id);
    navigate("/");
  };

  const [file, setFile] = useState(null);
  const inputEl = useRef();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClickSave = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("date", input.date);
      formData.append("mood", input.mood);
      formData.append("title", input.title);
      formData.append("content", input.content);
      console.log("FILE>>>>>>>", file);
      formData.append("image", file);
      //   const { error } = validatePost(input);
      //   if (error) {
      //     return toast.error(error.message);
      //   }
      await updatePost(formData);
      toast.success("success update diary");
      setFile(null);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
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
    <div className="bg-warning p-3 pb-5">
      <div
        className="mx-auto p-4  border border-1 bg-primary mt-1 rounded-5 shadow  d-flex flex-column justify-content-center mt-5"
        style={{ maxWidth: 900, minHeight: 800 }}
      >
        <input
          className="mb-4 text-secondary form-select form-select-m "
          type="date"
          id="date"
          name="date"
          value={input.date}
          onChange={handleChangeInput}
        />

        <select
          className="form-select form-select-m text-secondary"
          aria-label=".form-select-lg example"
          id="mood"
          name="mood"
          value={input.mood}
          onChange={handleChangeInput}
        >
          <option selected>Select your mood here</option>
          <option value="Sunny Day">Sunny Day</option>
          <option value="Rainy Day">Rainy Day</option>
          <option value="Autum Chill">Autum Chill</option>
          <option value="Blossom">Blossom</option>
        </select>

        <form
          className="d-flex flex-column gap-3 pt-4"
          onSubmit={handleClickSave}
        >
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              name="title"
              value={input.title}
              onChange={handleChangeInput}
            />
          </div>
          <div className="mb-3">
            <textarea
              rows="15"
              cols="50"
              type="text"
              className="form-control"
              placeholder="Write your story here..."
              name="content"
              value={input.content}
              onChange={handleChangeInput}
            />
          </div>

          <div className="">
            <input
              type="file"
              className="d-none"
              ref={inputEl}
              onChange={(e) => {
                if (e.target.files[0]) {
                  console.log(e.target.files);
                  setFile(e.target.files[0]);
                }
              }}
            />

            <div className="text-center mt-3">
              <span onClick={() => inputEl.current.click()}>
                <div className="d-flex flex-column align-items-center mt-3 py-3 rounded-2 bg-gray-100 hover-bg-gray-200">
                  <div className="text-center rounded-circle bg-gray-300 p-2 position-relative h-10 w-10 "></div>

                  <img
                    src={
                      file
                        ? URL.createObjectURL(file)
                        : input.image || uploadImg
                    }
                    className="cursor-pointer "
                    width="150"
                    height="150"
                    alt="Img"
                  />
                </div>
              </span>
            </div>
          </div>

          <div className="d-flex justify-content-around mt-3">
            <button type="submit" className="btn btn-secondary text-primary">
              Update Diary
            </button>
            <button
              className="btn btn-secondary text-primary"
              onClick={handleClickDelete}
            >
              Delete Diary
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateForm;
