

import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './shared/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from './pages/Profile'


const App = () => {

  const router=createBrowserRouter([
    {
      path: '/',
      element: <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path: '/about',
      element: <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path: '/contact',
      element: <div>
        <Navbar/>
        <Contact/>
      </div>
    },
    {
      path: '/login',
      element: <div>
        <Navbar/>
        <Login/>
      </div>
    },
    {
      path: '/register',
      element: <div>
        <Navbar/>
        <Register/>
      </div>
    },{
      path:"/profile",
      element: <div>
        <Navbar/>
        <Profile/>
      </div>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>

       {/* Toast container for showing popups */}
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  )
}

export default App