import React from "react";
import {Routes,BrowserRouter,Route} from 'react-router-dom';
import {Navbar, Home, CreatePost, PostDetail} from './index';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Navbar />
       <Routes>

        <Route  index element={<Home/>}/>
        <Route  path="/post/:postId" element={<PostDetail/>} />
        <Route  path="/create-post" element={<CreatePost/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
