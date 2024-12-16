import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Store from "../store/Store";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleProduct from "../store/sProduct";
import Dashboard from "../Dashboard/Dashboard";
import UploadProducts from "../Dashboard/UploadProducts";
import ManageProducts from "../Dashboard/ManageProducts";
import EditProducts from "../Dashboard/EditProducts";
import UDashboardLayout from "../UDashboard/UDashboardLayout";
import UDashboard from "../UDashboard/UDashboard";
import UViewproduct from "../UDashboard/UViewproduct";
import SignUp from "../Authentication/SignUp";
import Login from "../Authentication/Login";
import LogOut from "../Authentication/LogOut";
import { login } from "../Don";
import DashboardLayout from "../Dashboard/DashboardLayout";
import PrivateRoute from "../Authentication/PrivateRoute";
import UserPrivateRoute from "../Authentication/UserPrivateRoute";
import Cart from "../Cart";
import AdminProducts from "../Dashboard/AdminProducts";
import AdminSingleProduct from "../Dashboard/AdminSingleProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: login ? <Home /> : <Login />,
      },

      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/singleproduct",
        element: <SingleProduct />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/product/${params.id}`),
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/admin/dashboard/dashboards",
        element: <Dashboard />,
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadProducts />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageProducts />,
      },
      {
        path: "/admin/dashboard/edit/:id",
        element: <EditProducts />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/product/${params.id}`),
      },
      {
        path: "/admin/dashboard/view-products",
        element: <AdminProducts />,
      },
      {
        path: "/admin/dashboard/single-product/:id",
        element: <AdminSingleProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/searchById/${params.id}`),
      },
    ],
  },
  {
    path: "/user/dashboard",
    element: (
      <UserPrivateRoute>
        <UDashboardLayout></UDashboardLayout>
      </UserPrivateRoute>
    ),

    children: [
      {
        path: "/user/dashboard",
        element: <UDashboard />,
      },
      {
        path: "/user/dashboard/",
        element: <UViewproduct />,
      },
      {
        path: "/user/dashboard/products",
        element: <AdminProducts />,
      },

      {},
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/signout",
    element: <LogOut />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

export default router;
