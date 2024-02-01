import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Main/Layout/Layout';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import BookMark from './Components/Bookmark/BookMark';
import Shows from './Components/Shows/Shows';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/details/:id',
        element: <Details></Details>
      },
      {
        path: '/About',
        element: <About></About>
      },
      {
        path: '/Contact',
        element: <Contact></Contact>
      },
      {
        path: '/Book',
        element: <BookMark></BookMark>
      },
      {
        path: '/Shows',
        element: <Shows></Shows>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
