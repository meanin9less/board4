import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import Menu from './Menu';
export default function Header() {
///데이터
const [posts, setPosts] = useState([
    { id: 1, title: "안녕하세요", body: "반갑습니다", writer: "김진아" },
    { id: 2, title: "안녕하세요", body: "반갑습니다", writer: "김진아" },
    { id: 3, title: "안녕하세요", body: "반갑습니다", writer: "김진아" },
    { id: 4, title: "안녕하세요", body: "반갑습니다", writer: "김진아" },
]);

const menuList = [
    {id: 1, title: "글쓰기", path:""},
    {id: 2, title: "목록으로", path:""},
];

//state
const [nextId, setNextId] = useState(posts.length + 1);
const Navigate = useNavigate();

////함수
const newPostList = (title, body, writer)=> {
    posts.push({ id: nextId, title, body, writer });
    setNextId(nextId + 1);
    Navigate("/");
};

const updateList = (id, title, body, writer)=> {
    setPosts(posts.map((list) => list.id === Number(id) ? { id, title, body, writer } : list));
    Navigate("/");
};

const deleteList = (id)=> {
    setPosts(posts.filter((list) => list.id !== Number(id)));
    Navigate("/");
};

return (
    <>
        <h1>Board</h1>
        <hr></hr>
        <Menu menuList={menuList}></Menu>
        <hr></hr>
        <Outlet context={{ posts, newPostList, updateList, deleteList }}></Outlet>
    </>
);
};