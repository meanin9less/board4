import { Link } from "react-router-dom";

export default function Menu(props){
    const menuLst=[];
    for(let m of props.menuList){
        const item = <Link key={m.id} to={m.path} style={{marginRight: "10px"}}>{m.title}</Link>
        menuLst.push(item);
    }
    return(
    <>
        {menuLst}
    </>
    )
}