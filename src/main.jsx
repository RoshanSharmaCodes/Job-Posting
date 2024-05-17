import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router.jsx'
import { Provider } from 'react-redux'
import { store } from './Store/Store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}><RouterProvider router={Router} /></Provider>,
)
