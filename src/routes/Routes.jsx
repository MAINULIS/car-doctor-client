import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../access/Login";
import Register from "../access/Register";

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
      ],
    },
  ]);

  export default router;