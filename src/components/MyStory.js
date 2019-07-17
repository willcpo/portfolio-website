import React from "react";
import {Switch, Route, Link, withRouter} from "react-router-dom";

//import * as api from "../api";

class MyStory extends React.Component {

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
		};

		this.resize = this.resize.bind(this);
	}

	componentDidMount(){
		if (this.props.context) return;
		let links = document.querySelectorAll(".circleLink");

		links.forEach((link)=>{

			link.addEventListener("click",()=>{

				setTimeout(()=>{
					this.resize();
				},200);
			});

		});
		
		window.addEventListener("resize",this.resize);
		
		setTimeout(()=>{
			this.resize.call();
		},100);
		
	}


	componentWillUnmount(){
		if (this.props.context) return;
		window.removeEventListener("resize",this.resize);
	}

	resize(){
		if (this.props.history.location.pathname=="/" ){
			if (window.innerWidth > 689){
				this.props.history.push("/programming");
				setTimeout(()=>{
					this.resize.call();
				},50);
				return;
			} else {
				return;
			}
			
		}
	
		let display = document.querySelector(".display");
		let selected = document.querySelector(".selectedStory");
		let timeline = document.querySelector(".timeline");
	
		let displayBoundingRect = display.getBoundingClientRect();
		let selectedBoundingRect = selected.getBoundingClientRect();
	
		let displayX = display.offsetLeft;
		let displayY = display.offsetTop;
		let displayWidth = displayBoundingRect.width;
		let displayHeight = displayBoundingRect.height;
	
		let selectedX = timeline.offsetLeft;
		let selectedY = selected.offsetTop+50;
		let selectedHeight = selectedBoundingRect.height;
	
		this.setState({storyLineInfo: {
			leftX: (displayX+displayWidth)+"px",
			centerX: (displayX+displayWidth+selectedX)/2+"px",
			LeftY: displayY+displayHeight/2+"px",
			topY: (Math.min(displayY+displayHeight/2, selectedY+selectedHeight/2)+2)+"px",
			RightY: selectedY+selectedHeight/2+"px",
			heightDiff: (Math.abs((displayY+displayHeight/2) - (selectedY+selectedHeight/2))-2)+"px"
		}});
	}


	render(){

		return (
			<>
			<h1 className="pageTitle storyPageTitle">My Story</h1>
			<div id="centeredContent">
				<Switch>
					<Route exact path="/acting" render={()=>(
						<div className = "display">
							<Link to="/"><img src="/img/x.png" className="xButton xButton-display" /></Link>
							<div className="storyContent">
								<h2 className="storyTitle">
									Singing &amp; Acting
								</h2>
								<p className="storyParagraph">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Since I can remember, I have always been a performer. I joined the chorus in high school and middle school and have had the privilege of performing solos in school concerts. I have sung and acted in countless film projects of myself and my friends, as well as many school plays.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I received a state award in performing arts for my contributions, including my daily role as the morning announcer in high school.<br /><br />Such roles include The Cowardly Lion in &ldquo;The Wizard of Oz&rdquo;, Fagin in &ldquo;Oliver&rdquo; and Macbeth in &ldquo;Macbeth&rdquo;.
								</p>
							</div>
						</div>
					)
					}/>
					<Route exact path="/film" render={()=>(
						<div className = "display">
							<Link to="/"><img src="/img/x.png" className="xButton xButton-display" /></Link>
							<div className="storyContent">
								<h2 className="storyTitle">
									Film &amp; Animation
								</h2>
								<p className="storyParagraph">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Since childhood I wrote, filmed and edited many of my own digital video projects using Final Cut, Adobe Premiere and various other projects.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At Emerson College, I pursued those interests, developing a keen eye in the art of aesthetics and narrative, as well as developing a profound interest and skillset in animation, which I found technically engaging and incredibly flexible as a communication medium.
								</p>
							</div>
						</div>
					)
					}/>
					<Route exact path="/politics" render={()=>(
						<div className = "display">
							<Link to="/"><img src="/img/x.png" className="xButton xButton-display" /></Link>
							<div className="storyContent">
								<h2 className="storyTitle">
									Political Science
								</h2>
								<p className="storyParagraph">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;While pursuing film, I wrote almost exclusively about history and science. My frustration grew as I began to realize that film was not a sufficient enough medium to convey intricate and grand ideas about our world and to sway public opinion.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To study exactly how the trajectory of history and science can be shaped, I decided to leave Emerson and transfer to NYU to study political science.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In studying game theory and statistical analysis, I hoped to understand the mechanisms in which historical and technological change can manifest itself within society and government.
								</p>
							</div>
						</div>
					)
					}/>
					<Route exact path="/programming" render={()=>(
						<div className = "display">
							<Link to="/"><img src="/img/x.png" className="xButton xButton-display" /></Link>
							<div className="storyContent">
								<h2 className="storyTitle">
									Computer Programming
								</h2>
								<p className="storyParagraph">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;While I deeply enjoyed learning about politics through the lens of game theory and statistical analysis, I realized that that career trajectory would not lead me to help implement technological and historical triumphs. For that, my eyes turned toward the society-changing sectors of software and web technologies.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The extension of human thought and memory, facilitated by communication and software technologies have allowed humans to understand more about their world and expand their potentials. That is a revolution of human history that I would like to be a part of.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;That is exactly why I chose to change my major once again and graduate Magna Cum Laude, majoring in Computer Science with a GPA of 3.95
								</p>
							</div>
						</div>
					)
					}/>
				</Switch>
				<Route exact path={["/acting","/film","/politics","/programming"]} render={()=>{
					return (
						<>
						<div className="storyLineHorizontal" style={{left: this.state.storyLineInfo.leftX, top: this.state.storyLineInfo.LeftY}}></div>
						<div className="storyLineHorizontal" style={{left: this.state.storyLineInfo.centerX, top: this.state.storyLineInfo.RightY}}></div>
						<div className="storyLineVertical" style={{left: this.state.storyLineInfo.centerX, top: this.state.storyLineInfo.topY, height: this.state.storyLineInfo.heightDiff}}></div>
						</>
					);
				}}/>
				<div className="timeline">
					<div className="line"></div>
					<Link className={this.props.location.pathname.toLowerCase()=="/acting"?"selectedStory circleLink":"circleLink"} id="acting" to="/acting"><img src="/img/theater.svg" className="circle"/></Link>
					<Link className={this.props.location.pathname.toLowerCase()=="/film"?"selectedStory circleLink":"circleLink"} id="film" to="/film"><img src="/img/clapperboard.svg" className="circle" /></Link>
					<Link className={this.props.location.pathname.toLowerCase()=="/politics"?"selectedStory circleLink":"circleLink"} id="politics" to="/politics"><img src="/img/capitol.svg"className="circle" /></Link>
					<Link className={this.props.location.pathname.toLowerCase()=="/programming"?"selectedStory circleLink":"circleLink"} id="programming" to="/programming"><img src="/img/analytics.svg" className="circle" /></Link>
			
				</div>
			</div>
			</>
		);
	}

	
}

export default withRouter(MyStory);