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
import store from './Pages/Signup/store';
import Blog from './Pages/Blog/Blog';
import AllTask from './Pages/Dashboard/AllTask/AllTask';
import PrivetRoute from './Route/PrivetRoute';



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
        path: '/blog',
        element:<Blog></Blog>
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
    element:<PrivetRoute>
      <DashBoard></DashBoard>
    </PrivetRoute>,
    children:[
      {
        path: '/dashboard',
        element:<Dash></Dash>,
      },
      {
        path: '/dashboard/alltask',
        element:<AllTask></AllTask>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider store={store}>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
