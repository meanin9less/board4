import { Outlet } from 'react-router-dom';
import Menu from './Menu';
export default function Header() {

const menuList = [
    {id: 1, title: "글쓰기", path:""},
    {id: 2, title: "목록으로", path:""},
];

return (
    <>
        <h1>Board</h1>
        <hr></hr>
        <Menu menuList={menuList}></Menu>
        <hr></hr>
        <Outlet></Outlet>
    </>
);
};