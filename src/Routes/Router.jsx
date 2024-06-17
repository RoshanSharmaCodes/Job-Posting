import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../Pages/Home"
import CreateJob from "../Pages/CreateJob"
import GetJob from "../Pages/GetJob"
import SalaryEst from "../Pages/SalaryEst"
import EditJob from "../Pages/EditJob"
import LoginPage from "../Pages/LoginPage"
import SignupPage from "../Pages/SignupPage"
import ProfilePage from "../Pages/ProfilePage"

import { AppliedJobs } from "../Pages/AppliedJobs"
import { JobProfile } from "../Pages/JobProfile"
import { UserProfile } from "../Pages/UserProfile"

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Post-Job",
        element: <CreateJob />,
      },
      {
        path: "/Login",
        element: <LoginPage />,
      },
      {
        path: "/SignUp",
        element: <SignupPage />,
      },
      {
        path: "/My-Jobs",
        element: <GetJob />,
      },
      {
        path: "/Salary-Estimate",
        element: <SalaryEst />,
      },
      {
        path: "/edit-job/:id",
        element: <EditJob />,
        loader: ({ params }) => fetch(`https://job-posting-server-puce.vercel.app/edit-job/${params.id}`),
      },
      {
        path: "/Profile",
        element: <ProfilePage/>
      }, 
      {
        path: "/AppliedJobs",
        element: <AppliedJobs/>
      },
      {
        path: "/JobProfile/:id",
        element: <JobProfile/>
      },
      {
        path: "/Resume/:id",
        element: <UserProfile/>
      }
    ],
  },
  {
    path: "",
    element: "",
  },
])

export default Router
