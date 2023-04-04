import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage/landing_page';
import IndexComponent from './Components/indexComponent/index_component';
import PostView from './Components/PostView/post_view';
import PostForm from './Components/PostView/post_form';
 
function App()  {
  return (
    <div className="wrapper">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/post-view' element={<PostView/>}/>
        <Route path='/post-form' element={<PostForm/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;