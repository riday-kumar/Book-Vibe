import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import "./App.css";
import routers from "./Routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routers}></RouterProvider>
  </StrictMode>
);
