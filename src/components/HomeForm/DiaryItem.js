import DiaryContent from "./DiaryContent";

function DiaryItem({ post }) {
  return (
    <li className={"list-group-item p-3 callout-primary rounded-3 "}>
      <DiaryContent post={post} />
    </li>
  );
}

export default DiaryItem;
