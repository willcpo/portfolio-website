import React from "react";
//import * as api from "../api";

class ContactMe extends React.Component {


	render(){
		return (
			<>
			<div className="contactPage">
				<div className="contactFirstRow">
					<div className="personalSection">
						<div className="myImage">
							<img src="img/me.jpg"/>
						</div>
						<div className="locationInfo">
							<p><em>Based in</em> <br /><b>Fairfield, CT, USA</b></p>
							<p><em>Moving to</em><br /><b>San Francisco, California</b></p>
						</div>
					</div>
					<div className="contactSection cs2">
						<div className="contactInfo">
							<p><em>Email</em> <br /><img src="/img/E.png"/></p>
						</div>
						<div className="contactInfo">
							<p><em>Phone Number</em><br /><img src="/img/TP.png"/></p>
						</div>
					</div>
					<div className="tempColumn">
						<div className="contactInfoSection">
							<p>Hi! Thanks for visiting my website! I really appreciate your support. I&apos;m currently looking for a career in front-end, back-end and full stack development, specifically in Java and web development.<br /><br />Please contact me with any projects you hope for me to work on. I am excited to connect and prove my skills.</p>
						</div>
						<div className="contactSection cs1">
							<div className="contactInfo">
								<p><em>Email</em> <br /><img src="/img/E.png"/></p>
							</div>
							<div className="contactInfo">
								<p><em>Phone Number</em><br /><img src="/img/TP.png"/></p>
							</div>
						</div>
					</div>
				</div>
				<div className="socialRow">
					<a href="https://github.com/willcpo" className="socialMedia">
						<img src="/img/githubBig.png"/><p>Pull My Repositories</p>
					</a>
					<a href="https://www.linkedin.com/in/wcp227/" className="socialMedia">
						<img src="/img/linkedinBig.png"/><p>Connect With Me</p>
					</a>
					<a href="https://www.facebook.com/Willcpo" className="socialMedia">
						<img src="/img/facebookBig.png"/><p>Friend and Follow</p>
					</a>
				</div>
			</div>
			
			
			</>
		);
	}
	
}

export default ContactMe;