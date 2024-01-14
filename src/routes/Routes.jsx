import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../access/Login";
import Register from "../access/Register";
import CheckOut from "../pages/checkOut/CheckOut";

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
          element: <CheckOut></CheckOut>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
      ],
    },
  ]);

  export default router;