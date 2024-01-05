
import Home from "../Home";
import About from "../../About/About";
import Contact from "../../Contact.jsx/Contact";
import Favorite from "../../Favorite/Favorite";
import Jobs from "../../Jobs/Jobs";
import Signup from "../../Signup/Signup";
import { createBrowserRouter } from "react-router-dom";
import App from "../../../App";
import SignOut from "../../SignOut/SignOut";


    const router =   createBrowserRouter([
      { path: "/", element: <App/> ,
      children:[
        { path: "/", element: <Home/>,
       loader: () => {
        return fetch("../../../../data.json")
       } },
        { path: "/about", element: <About/> },
      { path: "/contact", element: <Contact/> },
      { path: "/favorite", element: <Favorite/> },
      { path: "/jobs", element: <Jobs/>,
      loader:()=>{
        return fetch("../../../../data.json")
      } },
      { path: "/singup", element: <Signup/> },
      { path: "/singout", element: <SignOut/> }
      ]
    }
    ]);
 

export default router;
