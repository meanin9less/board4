import { createSlice } from "@reduxjs/toolkit";

const initState = [
    { id: 1, title: "안녕하세요", body: "반갑습니다", writer: "김진아" },
    { id: 2, title: "안녕하세요", body: "반갑습니다", writer: "김진아" },
    { id: 3, title: "안녕하세요", body: "반갑습니다", writer: "김진아" },
    { id: 4, title: "안녕하세요", body: "반갑습니다", writer: "김진아" },
];

const postListSlice = createSlice({
    name:"postList",
    initialState:{
        postList: initState,
        nextId: initState.length+1
    },
    reducers:{
        onSave:(state, action)=>{ //새로 저장될 객체가 들어와야함
            state.postList.push({id:state.nextId, ...action.payload});
            state.nextId++;
        },
        onUpdate:(state, action)=>{
            for(let i = 0; i<state.postList.length; i++){
                if(state.postList[i].id=== action.payload.id){
                    state.postList[i] = action.payload;
                    break;
                };
            };
        },
        onDelete:(state, action)=>{
            state.postList = state.postList.filter((post)=>post.id!==action.payload.id);
        }
    }
});
// postList postId 라는 상태값, 액션생성자, 만듦
export const {onSave, onUpdate, onDelete} = postListSlice.actions;
export default postListSlice;