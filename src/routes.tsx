import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { About, Blog, Home, Shop } from "./pages";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/blog", element: <Blog /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

export default router;
