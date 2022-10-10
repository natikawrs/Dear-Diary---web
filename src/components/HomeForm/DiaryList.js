import DiaryItem from "./DiaryItem";

function DiaryList({ posts, searchTerm, searchMood }) {
  return (
    <ul className="list-group my-2 d-flex justify-content-between gap-3">
      {posts
        .filter((item) => {
          return (
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            item.mood.toLowerCase().includes(searchMood.toLowerCase())
          );
        })

        .map((item) => (
          <DiaryItem key={item.id} post={item} />
        ))}
    </ul>
  );
}

export default DiaryList;
