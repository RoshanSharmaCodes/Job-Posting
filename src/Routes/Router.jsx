import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../Pages/Home"
import CreateJob from "../Pages/CreateJob"

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
        element: <CreateJob/>,
      },
    ],
  },
  {
    path: "",
    element: "",
  },
])

export default Router
