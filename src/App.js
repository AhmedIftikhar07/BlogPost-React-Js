// import { createContext, useState } from "react";
import BlogPost from "./component/BlogPost";
import AddBlogs from "./component/AddBlogs";
import BlogDetail from "./component/BlogDetail";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import User from "./component/User";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

function App() {

  return (

    <div>


          
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blogs" element={<BlogPost />} />
          <Route path="/addblog" element={<AddBlogs/>} />
          <Route path="/detail/:id" element={<BlogDetail />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />  
          <Route path="/about" element={<About />} />  
        </Routes>
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />

        
 
     
    </div>
  );
}

export default App;
