import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { onDelete, onUpdate } from './postListSlice';

//예외처리하기, 
//setNextId, setPosts 등 header부분에서 존재하는 상태값들이 updateList, deletedList등의 함수에 의해 바뀔때
//Header가 다시 랜더링됨, 그때 랜더링될때 페이지는 네비게이트 되기 전 현재페이지를 유지
//그래서 post가 undefined, null 일 수 있음, 그럴때의(배열에서 요소를 못찾았을때) 예외처리를 해줘야 오류가 발생하지 않음.
// Navigate, setPosts 둘다 비동기
// state 값은 반드시 실행을 보장받음 if문 아래로 옮겨도 오류남, 3항연산으로 예외일때 값을 처리해줘야 함

export default function ReadPost() {
const { postId } = useParams();
const post = useSelector((state)=>state.postList.postList.find((p)=>p.id===Number(postId)));

const dispatch = useDispatch();
const navigate = useNavigate();
const [title, setTitle] = useState(post ? post.title : ""); //post가 값이 있냐?
const [body, setBody] = useState(post ? post.body : "");
const [writer, setWriter] = useState(post ? post.writer : "");

if (!post) {
    return;
};

return (
    <>
    <form onSubmit={(e) =>  e.preventDefault() }>
        <input type='text' value={title} onChange={(e) =>  setTitle(e.target.value) }></input>
        <hr></hr>
        <textarea value={body} onChange={(e) =>  setBody(e.target.value) }></textarea>
        <hr></hr>
        <input type="text" value={writer} onChange={(e) =>  setWriter(e.target.value) }></input>
        <hr></hr>

        <button onClick={() => {
            dispatch(onUpdate({id:post.id, title, body, writer})); 
            navigate("/");}
            }>수정</button>
        <button onClick={() => {
            dispatch(onDelete({id:post.id}));
            navigate("/");
            }}>삭제</button>
    </form>
    </>
);
};