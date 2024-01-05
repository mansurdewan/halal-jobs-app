import { Outlet } from "react-router-dom"
import Home from "./Page/Home/Home"
import Nav from "./Page/Home/Nav/Nav"

function App() {


  return (
    <>
     <Nav/>
     <Outlet/>
    </>
  )
}

export default App
