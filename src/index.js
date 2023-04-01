import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/fonts/fonts.css';


import Home from './components/Home';
import Form from './components/Form';
import NavBar from './components/NavBar';
import Graph from './components/Graph';
import DashBoard from './components/DashBoard';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/form",
    element: <Form/>,
  },
  {
    path: "/graph",
    element: <Graph/>,
  },
  {
    path: "/dashBoard",
    element: <DashBoard/>,
  }
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <RouterProvider router={router} />
  </React.StrictMode>
);
