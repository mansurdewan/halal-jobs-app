import React from 'react'
import aboutStyle from "../Home/home.module.css"
function About() {
  
  return (
    <div className={aboutStyle.aboutParent}>
    <div className={aboutStyle.aboutContainer}>
		<h1 className={aboutStyle.aboutTitle}>About Our App</h1>
		<p className={aboutStyle.aboutParagrap}>Our app is designed to help Muslims find jobs that align with their religious beliefs. We understand that finding halal job opportunities can be challenging, and that's why we created this app to make the process easier and more efficient.</p>
		<p className={aboutStyle.aboutParagrap}>Our app provides a comprehensive database of halal jobs in various fields, including healthcare, education, finance, and technology. We work with employers who share our values and are committed to providing a halal work environment for their employees.</p>
		<p className={aboutStyle.aboutParagrap}>Our app is easy to use and user-friendly. You can search for jobs by location, field, and other criteria. You can also create a profile and upload your resume to make it easier for employers to find you.</p>
		<p className={aboutStyle.aboutParagrap}>If you have any questions or feedback about our app, please don't hesitate to contact us. We are always looking for ways to improve our service and provide the best possible experience for our users.</p>
	</div>
  </div>
  )
}

export default About
