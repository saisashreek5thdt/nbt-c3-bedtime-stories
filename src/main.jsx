import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Author, Page1, Page2, Page3, Page4, Page5 } from "./Pages/index.js";
import { HindiPage1, TeluguPage1 } from "./Lang/index.js";
import { Quiz1 } from "./Quiz/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about/author/",
    element: <Author />
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
    path: "/books/page4/",
    element: <Page4 />,
  },
  {
    path: "/books/page5/",
    element: <Page5 />
  },
  {
    path: "/quiz/quiz1",
    element: <Quiz1 />
  },
  {
    path: "/lang_02/page1/",
    element: <HindiPage1 />
  },
  {
    path:"/lang_03/page1/",
    element: <TeluguPage1 />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
