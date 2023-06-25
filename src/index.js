import React from 'react';
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Navigacija from './components/Navigacija';
import Onama from './components/Onama';
import Iznajmi from './components/Iznajmi';
import Kupi from './components/Kupi';

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,

  },
  {
    path: "/Onama",
    element: <Onama />,

  },
  {
    path: "/Iznajmi",
    element: <Iznajmi />,

  }, ,
  {
    path: "/Kupi",
    element: <Kupi />,

  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
