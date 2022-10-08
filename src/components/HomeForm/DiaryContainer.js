import SearchText from "./SearchText";
import Sort from "./Sort";
import DiaryList from "./DiaryList";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function DiaryContainer({ posts, setPosts }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const changeSearchTerm = (text) => {
    setSearchTerm(text);
  };

  return (
    <>
      <div className=" d-flex justify-content-center my-3">
        <button
          className="btn w-75 p-3 rounded-4 shadow bg-primary text-secondary fs-3 fw-3"
          onClick={() => {
            navigate("/post");
          }}
        >
          Create Diary
        </button>
      </div>
      <div className=" mx-auto p-4 border border-1 bg-primary mt-1 rounded-5 shadow">
        <div className="my-2 d-flex gap-3 ">
          <SearchText
            changeSearchTerm={changeSearchTerm}
            searchTerm={searchTerm}
          />
        </div>
        <div className="my-2 d-flex justify-content-between">
          <Sort />
        </div>
        <DiaryList posts={posts} setPosts={setPosts} />
        <div className="my-2 d-flex justify-content-between align-items-center"></div>
      </div>
    </>
  );
}

export default DiaryContainer;
