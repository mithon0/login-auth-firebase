import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

// Import all of Bootstrap's CSS


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './Header/Header';
import Home from './Home/Home';
import LogIn from './LogIn/LogIn';
import Register from './Register/Register';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Header></Header>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<LogIn></LogIn>
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
