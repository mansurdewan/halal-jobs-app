import React from 'react'
import heroImage from "../../assets/images/herro2.jpg"
import homeStyle from "./home.module.css"
import { Link, useLoaderData } from 'react-router-dom'
import Job from '../Jobs/Job'
import cardStyle from "../Jobs/job.module.css"
function Home() {
  const datas = useLoaderData()
  const three = datas.slice(-5)
  return (
    <>
    <div className={homeStyle.textParent}>
     <div className={homeStyle.heroText}>
      <h1 className={homeStyle.textLive}>Live<span className={homeStyle.textSpan}>!</span></h1>
      <h2 className={homeStyle.textCertified}>A Life, Certified By </h2>
      <h1 className={homeStyle.textAllah}>ALLAH</h1>
      <h1 className={homeStyle.textThrough}>With us <span> <Link to="/singup" className={homeStyle.heroButton}>Explore now</Link></span></h1> 
      
  
     </div>
      <img src={heroImage} alt="" className={homeStyle.heroImage}/>
    </div>

    <div  className={cardStyle.cardsParent}>
    {three.map(data =>   <Job key={data.id} data={data}/>)}
    </div>
   
    </>
  )
}

export default Home
