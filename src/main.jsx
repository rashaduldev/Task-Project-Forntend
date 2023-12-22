import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import AuthProvider from './Provider/AuthProvider';
import DashBoard from './Layout/Dashboard';
import Dash from './Pages/Dashboard/Dash';
import Task from './Pages/Dashboard/Task';
import NewTask from './Pages/Dashboard/NewTask/NewTask';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/about',
        element:<About></About>
      },
      {
        path: '/contact',
        element:<Contact></Contact>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/signup',
        element:<Signup></Signup>
      },
    ]
  },
  {
    path: '/dashboard',
    element:<DashBoard></DashBoard>,
    children:[
      {
        path: '/dashboard',
        element:<Dash></Dash>,
      },
      {
        path: '/dashboard/previoustask',
        element:<previousTask></previousTask>
      },
      {
        path: '/dashboard/newtask',
        element:<NewTask></NewTask>
      },
      {
        path: '/dashboard/alltask',
        element:<Task></Task>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
