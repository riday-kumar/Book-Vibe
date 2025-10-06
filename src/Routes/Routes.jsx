import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadList from "../ReadList/ReadList";
import WishList from "../WishList/WishList";

const routers = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch("/booksData.json"),
        Component: Home,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("/booksData.json"),
        Component: BookDetails,
      },
      {
        path: "/readlist",
        loader: () => fetch("/booksData.json"),
        Component: ReadList,
      },
      {
        path: "/wishlist",
        loader: () => fetch("/booksData.json"),
        Component: WishList,
      },
    ],
  },
]);

export default routers;
