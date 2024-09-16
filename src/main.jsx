import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Page1, Page2, Page3, Page4 } from "./Pages/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/books/page1/",
    element: <Page1 />,
  },
  {
    path: "/books/page2/",
    element: <Page2 />,
  },
  {
    path: "/books/page3/",
    element: <Page3 />,
  },
  {
    path: "/books/page4",
    element: <Page4 />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
