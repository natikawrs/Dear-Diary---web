import SearchText from "./SearchText";
import SearchMood from "./SearchMood";
import DiaryList from "./DiaryList";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function DiaryContainer({ posts, setPosts }) {
  const navigate = useNavigate();
  // const [diaries, setDiaries] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchMood, setSearchMood] = useState("");

  const changeSearchTerm = (text) => {
    setSearchTerm(text);
  };

  const changeSearchMood = (mood) => {
    setSearchMood(mood);
  };

  // const filteredDiaries = diaries.filter(
  //   (item) => item.title.toLowerCase().includes(searchTerm.toLowerCase())
  //   //  && searchMood === null
  // );
  // console.log(searchMood);
  // console.log(searchTerm);
  return (
    <>
      <div className=" d-flex justify-content-center my-3">
        <button
          className="btn w-75 p-3 rounded-4 shadow bg-primary text-secondary fs-3 fw-bold mb-4"
          onClick={() => {
            navigate("/post");
          }}
        >
          Create Diary
        </button>
      </div>
      <div className=" mx-auto p-4  border border-1 bg-primary mt-1 rounded-5 shadow">
        <div className="my-2 d-flex gap-3 px-5">
          <SearchText
            changeSearchTerm={changeSearchTerm}
            searchTerm={searchTerm}
          />
        </div>
        <div className="my-2 d-flex justify-content-between px-5">
          <SearchMood
            changeSearchMood={changeSearchMood}
            setSearchMood={setSearchMood}
            searchMood={searchMood}
          />
        </div>
        <DiaryList
          posts={posts}
          setPosts={setPosts}
          searchTerm={searchTerm}
          searchMood={searchMood}
          // filteredDiaries={filteredDiaries}
        />
        <div className="my-2 d-flex justify-content-between align-items-center"></div>
      </div>
    </>
  );
}

export default DiaryContainer;
