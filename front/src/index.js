import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./routes/main/Main";
import Login from "./routes/login/Login";
import SignIn from "./routes/login/SignIn";
import ErrorPage from "./routes/ErrorPage";
import ProductMain from "./routes/product/ProductMain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/productmain",
    element: <ProductMain />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
