import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/createassignment',
            element:<PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
        },
      ]
    },
    {
      path:'/signin',
      element:<SignIn></SignIn>
    },
    {
      path:'/signup',
      element:<SignUp></SignUp>
    }
  ]);
  

export default router;