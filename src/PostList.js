import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function PostList() {
const postList = useSelector((state)=>state.postList.postList); //postList 상태 슬라이스 객체 이름, postList 속성
const postListLinks = postList.map((list) => <div key={list.id}><Link to={"/" + list.id}>{list.title} (작성자 : {list.writer})</Link><hr></hr></div>);
return (
    <>
        {postListLinks}
    </>
);
};

