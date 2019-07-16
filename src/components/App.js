import React from "react";
import {Route, Switch, withRouter} from "react-router-dom";

import NavBar from "./NavBar";

import MyStory from "./MyStory";
import Resume from "./Resume";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

let appNonStateInfo = {
	resizeFunc: null,
	storyID: ""
};

class App extends React.Component {

	constructor(props){
		super(props);
		this.state = { 
			storyLineInfo: {
				leftX: "-100px",
				centerX: "-100px",
				topY: "-100px",
				bottomY: "-100px",
				heightDiff: "0px"
			},
			redirectFunc: redirect.bind(this)
		};
		appNonStateInfo.resizeFunc = getStoryLineInfo.bind(this, this.props.location.pathname.split("/")[1], this.setState.bind(this));
		appNonStateInfo.storyID = this.props.location.pathname.split("/")[1];

	}

	componentDidMount(){
		if (this.props.context) return;
		this.state.redirectFunc();
		if (!["/","/acting","/film","/politics","/programming"].includes(this.props.location.pathname)) return;
		
		let links = document.querySelectorAll(".circleLink");

		links.forEach((link)=>{

			link.addEventListener("click",(event)=>{

				setTimeout(()=>{
					appNonStateInfo.storyID = event.path[1].id;
					window.removeEventListener("resize", appNonStateInfo.resizeFunc);
					appNonStateInfo.resizeFunc = getStoryLineInfo.bind(this, appNonStateInfo.storyID, this.setState.bind(this));
					window.addEventListener("resize", appNonStateInfo.resizeFunc);
					appNonStateInfo.resizeFunc();
				},50);
			});

		});

		window.addEventListener("resize", this.state.redirectFunc);
		window.addEventListener("resize", appNonStateInfo.resizeFunc);
		
		appNonStateInfo.resizeFunc();
	}

	componentDidUpdate(){
		if (this.props.context) return;
		if (!["/","/acting","/film","/politics","/programming"].includes(this.props.location.pathname)) return;
		if (["","acting","film","politics","programming"].includes(appNonStateInfo.storyID)){
			window.removeEventListener("resize",appNonStateInfo.resizeFunc);
			window.removeEventListener("resize",this.state.redirectFunc);
		}else{
			let links = document.querySelectorAll(".circleLink");

			links.forEach((link)=>{

				link.addEventListener("click",(event)=>{
					appNonStateInfo.storyID = event.path[1].id;
					window.removeEventListener("resize", appNonStateInfo.resizeFunc);
					appNonStateInfo.resizeFunc = getStoryLineInfo.bind(this, appNonStateInfo.storyID, this.setState.bind(this));
					window.addEventListener("resize", appNonStateInfo.resizeFunc);
				
					appNonStateInfo.resizeFunc();
				});

			});
		}
		
	}

	componentWillUnmount(){
		if (this.props.context) return;
		window.removeEventListener("resize",appNonStateInfo.resizeFunc);
		window.removeEventListener("resize",this.state.redirectFunc);
	}

	render(){
		return(
			<>
				<Route exact path={["/acting","/film","/politics","/programming"]} render={()=>{
					return (
						<>
						<div className="storyLineHorizontal" style={{left: this.state.storyLineInfo.leftX, top: this.state.storyLineInfo.LeftY}}></div>
						<div className="storyLineHorizontal" style={{left: this.state.storyLineInfo.centerX, top: this.state.storyLineInfo.RightY}}></div>
						<div className="storyLineVertical" style={{left: this.state.storyLineInfo.centerX, top: this.state.storyLineInfo.topY, height: this.state.storyLineInfo.heightDiff}}></div>
						</>
					);
				}}/>
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
			</>
		);
	}

}

function redirect(){
	if (this.props.history.location.pathname=="/" && window.innerWidth > 689){
		this.props.history.push("/programming");
		appNonStateInfo.storyID = "programming";
		let thiss = this;
		setTimeout(()=>{
			getStoryLineInfo.call(thiss, "programming", thiss.setState.bind(thiss));
		},50);
	}
}

function getStoryLineInfo(id ,cb){
	if (this.props.location.pathname=="/") return;
	if (!["/acting","/film","/politics","/programming"].includes(this.props.location.pathname)) return;
	let display = document.querySelector(".display");
	let selected = document.querySelector("#"+id);

	let displayBoundingRect = display.getBoundingClientRect();
	let selectedBoundingRect = selected.getBoundingClientRect();

	let displayX = displayBoundingRect.x;
	let displayY = displayBoundingRect.y+window.scrollY;
	let displayWidth = displayBoundingRect.width;
	let displayHeight = displayBoundingRect.height;

	let selectedX = selectedBoundingRect.x;
	let selectedY = selectedBoundingRect.y+window.scrollY;
	let selectedHeight = selectedBoundingRect.height;

	cb({storyLineInfo: {
		leftX: (displayX+displayWidth)+"px",
		centerX: (displayX+displayWidth+selectedX)/2+"px",
		LeftY: displayY+displayHeight/2+"px",
		topY: (Math.min(displayY+displayHeight/2, selectedY+selectedHeight/2)+2)+"px",
		RightY: selectedY+selectedHeight/2+"px",
		heightDiff: (Math.abs((displayY+displayHeight/2) - (selectedY+selectedHeight/2))-2)+"px"
	}});
}

export default withRouter(App);