import { useOutletContext } from "react-router-dom";
export default function WritePost() {
    const {newPostList} = useOutletContext();
return (
    <>
    <form onSubmit={(e)=>{
        e.preventDefault();
        newPostList(e.target.title.value, e.target.body.value, e.target.writer.value);
    }}>
        <input type='text' name="title"></input><hr></hr>
        <textarea name="body"></textarea><hr></hr>
        <input type="text" name="writer"></input><hr></hr>
        <button type="submit">글쓰기</button>
    </form>
    </>
);
};