import DiaryItem from "./DiaryItem";

function DiaryList({ posts, setPosts }) {
  return (
    <ul className="list-group my-2 d-flex justify-content-between gap-3">
      {posts.map((item) => (
        <DiaryItem key={item.id} post={item} />
      ))}
    </ul>
  );
}

export default DiaryList;
