import { useDispatch } from "react-redux";
import { onSave } from "./postListSlice";
import { useNavigate } from "react-router-dom";

export default function WritePost() {
const dispatch = useDispatch();
const navigate = useNavigate();
return (
    <>
    <form onSubmit={(e)=>{
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        const writer = e.target.writer.value;
        dispatch(onSave({title, body, writer})); // {type:"postList/onSave", payload:{title, body, writer}};
        navigate("/");
    }}>
        <input type='text' name="title"></input><hr></hr>
        <textarea name="body"></textarea><hr></hr>
        <input type="text" name="writer"></input><hr></hr>
        <button type="submit">글쓰기</button>
    </form>
    </>
);
};