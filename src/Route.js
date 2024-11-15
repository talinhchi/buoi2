import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import Hello from "./components/Hello";
import Car from "./components/Car";
import ShowGroup from "./components/ShowGroup";
import AddGroup from "./components/AddGroup";
import EditGroup from "./components/EditGroup";
import ShowProduct from "./components/ShowProduct";
import AddProduct from "./components/AddProduct";
import DetailProduct from "./components/DetailProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "hello",
        element: <Hello />,
      },
      {
        path: "car",
        element: <Car />,
      },
      {
        path: "show-group",
        element: <ShowGroup />,
      },
      {
        path: "add-group",
        element: <AddGroup />,
      },
      {
        path: "edit-group/:id",
        element: <EditGroup />,
      },
      {
        path: "show-product",
        element: <ShowProduct />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "detail-product/:id",
        element: <DetailProduct />,
      },
    ],
  },
]);

function RouteWeb() {
  return <RouterProvider router={router} />;
}

export default RouteWeb;
