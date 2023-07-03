import React from 'react';
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import FormExample from './components/RegistrationForm';
import Registration from './components/Registration';
import Login from './components/Login';
import Logout from './components/Logout';
import AboutUs from './components/AboutUs';
import Rent from './components/Rent';
import Bill from './components/Bill';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,

  },
  {
    path: "/AboutUs",
    element: <AboutUs />,

  },
  {
    path: "/Rent",
    element: <Rent />,

  },
  {
    // 
    path: "/Bill/:id/:start/:end/:price",

    element: <Bill />,

  },
  {
    path: "/FormExample",
    element: <FormExample />,

  },

  {
    path: "/Registration",
    element: <Registration />,

  },
  {
    path: "/Login",
    element: <Login />,

  },
  {
    path: "/Logout",
    element: <Logout />,

  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
