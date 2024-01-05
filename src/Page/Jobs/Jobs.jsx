import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Job from './Job'
import jobsStyle from "./job.module.css"

function Jobs() {
  const datas = useLoaderData()
  console.log(datas)
  return (
    <div className={jobsStyle.cardsParent}>
      {datas.map(data => <Job key={data.id} data={data}/>)}
    </div>
  )
}

export default Jobs
