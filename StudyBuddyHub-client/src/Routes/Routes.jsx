import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error/Error";
import AllAssignments from "../Pages/AllAssignments/AllAssignments"
import UpdateAssignment from "../Pages/UpdateAssignment/UpdateAssignment";
import ViewAssignment from "../Pages/ViewAssignment/ViewAssignment";
import MyAssignments from "../Pages/MyAssignments/MyAssignments";
import SubmitAssignment from "../Pages/SubmitAssignment/SubmitAssignment";
import SubmittedAssignment from "../Pages/SubmittedAssignment/SubmittedAssignment";


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
        element: <AllAssignments></AllAssignments>
      },
      {
        path: '/myassignments',
        element: <PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>
      },
      {
        path: '/submittedassignment',
        element: <PrivateRoute><SubmittedAssignment></SubmittedAssignment></PrivateRoute>,
       
      },
      {
        path: '/createassignment',
        element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
      },
      {
        path: '/submitassignment/:id',
        element: <PrivateRoute><SubmitAssignment></SubmitAssignment></PrivateRoute>,
        loader: ({ params }) => fetch(`https://study-buddy-hub-server.vercel.app/assignments/${params.id}`)
      },
      {
        path: '/view/:id',
        element: <PrivateRoute><ViewAssignment></ViewAssignment></PrivateRoute>,
        loader: ({ params }) => fetch(`https://study-buddy-hub-server.vercel.app/assignments/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
        loader: ({ params }) => fetch(`https://study-buddy-hub-server.vercel.app/assignments/${params.id}`)
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