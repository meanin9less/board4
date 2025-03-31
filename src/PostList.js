import { Link, useOutletContext } from "react-router-dom";

export default function PostList() {
const { posts } = useOutletContext();
const postList = posts.map((list) => <div key={list.id}><Link to={"/" + list.id}>{list.title} (작성자 : {list.writer})</Link><hr></hr></div>);
return (
    <>
        {postList}          
    </>
);
};

