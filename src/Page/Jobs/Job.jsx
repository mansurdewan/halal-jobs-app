import React from "react";
import jobCss from "./job.module.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
function Job({ data }) {
  const { title, logo, companyName, position, description } = data;
  return (
    <div className={jobCss.singleCardParent}>
      <img src={logo} alt="" className={jobCss.cardLogo} />
     <div className={jobCss.cardTextParent}> <p className={jobCss.cardTitle}>{title}</p>
      <p className={jobCss.cardCompantName}>{companyName}</p>
      <p className={jobCss.cardPosition}>{position}</p>
      <p className={jobCss.cardDescription}>{description}</p></div>
      <div className={jobCss.cardIconParent}>
        <FaEdit className={jobCss.cardIconEdite} />{" "}
        <MdDelete className={jobCss.cardIconDelete} /> 
        <GrFavorite className={jobCss.cardIconFavorite}/>{" "}
      </div>
      <button className={jobCss.cardButtonApply}>Apply</button>
      <button className={jobCss.cardButtonDetails}>Details</button>
    </div>
  );
}

export default Job;
