import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    <h1 className='text-blue'>What's up fellas?</h1>
    <Outlet/>
    </>
  )
}

export default App
