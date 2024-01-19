import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../access/Login";
import Register from "../access/Register";
import CheckOut from "../pages/checkOut/CheckOut";
import Bookings from "../pages/bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
         path:"/",
         element: <Home></Home>
        },
        {
          path:"login",
          element: <Login></Login>
        },
        {
          path:"register",
          element:<Register></Register>
        },
        {
          path:"checkOut/:id",
          element: <PrivateRoute> <CheckOut></CheckOut></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:"bookings",
          element: <PrivateRoute><Bookings></Bookings>,</PrivateRoute>
        }
      ],
    },
  ]);

  export default router;