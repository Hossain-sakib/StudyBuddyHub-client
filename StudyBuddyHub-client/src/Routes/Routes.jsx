import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error/Error";
import AllAssignments from "../Pages/AllAssignments/AllAssignments"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allassignments',
        element:<AllAssignments></AllAssignments>
      },
      {
        path: '/createassignment',
        element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
      },
    ]
  },
  {
    path: '/signin',
    element: <SignIn></SignIn>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  }
]);


export default router;