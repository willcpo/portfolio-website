import React from "react";
import {Route, Switch} from "react-router-dom";

import NavBar from "./NavBar";

import MyStory from "./MyStory";
import Resume from "./Resume";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

//REMEMBER TO BUILD FOR EVERY UPLOAD -- otherwise change to   "start": "npm run build && node ./build/server.js",
//RUN npm run build

class App extends React.Component {


	render(){
		return(
			<div>
				<NavBar/>
				<div id="content">
					<Switch>
						<Route exact path={["/","/acting","/film","/politics","/programming"]} component={MyStory}/>
						<Route exact path="/Resume" component={Resume} context={this.props.context}/>
						<Route exact path="/Projects" component={Projects} context={this.props.context}/>
						<Route exact path="/ContactMe" component={ContactMe}/>
						<Route path="/" render={()=> <><h1 style={{color:"white"}}>404 Not Found. Sorry!</h1><p style={{color:"gray"}}>400 Level Errors mean that the HTTP request you submitted was invalid.</p></>}/>
					</Switch>

				</div>
				<div id="footer">
					<div id="icons">
						<a className="icon" href="https://github.com/willcpo"><img  src="/img/github.png" /></a>
						<a className="icon" href="https://www.linkedin.com/in/wcp227/"><img src="/img/linkedin.png" /></a>
						<a className="icon" href="https://www.facebook.com/Willcpo"><img src="/img/facebook.png" /></a>
					</div>
					<p id="copyright">© Will Powers 2019</p>
					<Route exact path={["/","/acting","/film","/politics","/programming"]} render={()=>{
						return (<div id="attribution">Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> and <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>);
					}}/>
				</div>
			</div>
		);
	}

}

export default App;