import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import style from "./nav.module.css"
import logo from "../../../assets/images/logo3.png"

function Nav() {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <div className={style.navParent}>
      <div>
        <img src={logo} alt="" className={style.logo}/>
      </div>
      <nav className={style.linkParent}>
       <div className={style.linkgeneral}>
       <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link className={`${location.pathname=== "/contact" ? "active": ""}`} to="/contact">Contact</Link>
        <Link to= "/favorite">Favorite</Link>
        <Link to="/jobs">Jobs</Link>
       </div>
       <div  className={style.linkSing}>
       <Link to="/singup" className={style.linkSingUp}>Sing Up</Link>
        <Link to="/singout"  className={style.linkSingOut}>Sing Out</Link>
       </div>
      </nav>
      
    </div>
  )
}

export default Nav
