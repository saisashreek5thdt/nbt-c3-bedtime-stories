import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Page1 } from "./Pages/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/books/page1/",
    element: <Page1 />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
