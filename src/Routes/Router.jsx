import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../Pages/Home"
import CreateJob from "../Pages/CreateJob"
import GetJob from "../Pages/GetJob"

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
        element: <CreateJob/>,
      },
      {
        path: "/My-Jobs",
        element: <GetJob/>,
      },
    ],
  },
  {
    path: "",
    element: "",
  },
])

export default Router
