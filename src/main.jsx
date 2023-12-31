import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login/Login';
import Play from './components/Play/Play';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Login/>,
  },
  {
    path: "/play",
    element: <Play/>    ,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />    
  </React.StrictMode>,
)
