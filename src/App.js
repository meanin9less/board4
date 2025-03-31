import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import PostList from './PostList';
import WritePost from './WritePost';
import ReadPost from './ReadPost';

function App() {

return (
  <>
    <Routes>
      <Route path='/' element={<Header></Header>}>
        <Route index element={<PostList></PostList>}></Route>
        <Route path="/:postId" element={<ReadPost></ReadPost>}></Route>
        <Route path='/WritePost' element={<WritePost></WritePost>}></Route>
      </Route>
    </Routes>
  </>
);
};

export default App;
