import { Navigate, createBrowserRouter } from "react-router-dom";
import {
  Login,
  NotFound,
  Signup,
  Users,
  UserForm,
  Posts,
  Profile,
  Message,
  Products,
  ProductForm,
} from "./components";
import { GuestLayout, Dashboard, Homescreen } from "./pages";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Homescreen />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/posts"} />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/messages",
        element: <Message />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Dashboard />,
    children: [
      {
        path: "/admin",
        element: <Navigate to={"/admin/users"} />,
      },
      {
        path: "/admin/users",
        element: <Users />,
      },
      {
        path: "/admin/users/new",
        element: <UserForm key={"userCreate"} />,
      },
      {
        path: "/admin/users/:id",
        element: <UserForm key={"userUpdate"} />,
      },
      {
        path: "/admin/products",
        element: <Products />,
      },
      {
        path: "/admin/products/new",
        element: <ProductForm key={"userCreate"} />,
      },
      {
        path: "/admin/products/:id",
        element: <ProductForm key={"userUpdate"} />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default App;
