import React from "react";
import {withRouter} from "react-router-dom";
//import * as api from "../api";

let interval = {
	amount:0
};


class SliderMenu extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			links: [
				"Yelp Restaurant Finder",
				"News Wiz",
				"Planner Pet",
				"Net.js TCP/IP Server",
				"Teacher Gradebook Extraordinaire",
				"Emoji Connect Four",
				"Weather Data Report Generator",
				"Frogger Clone",
			]
		};

		//Remember to set 'this' to the component for all custom functions
		this.renderLinks = this.renderLinks.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	renderLinks(){
		return this.state.links.map((link, index)=>{

			return (<span key={link} className="sliderLink" id={this.props.projectNum==index?"sliderSelected":""} onClick={this.handleClick.bind(this,index)}>{link}</span>);
		});
	}

	handleClick(num){
		this.props.chooseProject(num);
	}

	componentDidMount(){
		
		if (this.props.context) return;

		let leftArrow = document.querySelector(".triangleLeft");
		let rightArrow = document.querySelector(".triangleRight");
		let sliderMenu = document.querySelector("#sliderMenu");


		// if (sliderMenu.scrollLeft<65){
		// 	leftArrow.style.display="none";
		// }

		sliderMenu.addEventListener("scroll",()=>{

			if (sliderMenu.scrollLeft<21){
				leftArrow.style.display="none";
			} else{
				leftArrow.style.display="initial";
			}

			if (sliderMenu.scrollLeft>sliderMenu.scrollWidth-sliderMenu.getBoundingClientRect().width-5){
				rightArrow.style.display="none";
			} else{
				rightArrow.style.display="initial";
			}

			
		});

		let upLeft = up.bind(this,"left");
		let updateLeft = update.bind(this, -2, sliderMenu, upLeft);
		let downLeft = down.bind(this, updateLeft, "left");
		

		let upRight = up.bind(this,"right");
		let updateRight = update.bind(this, 2, sliderMenu, upRight);
		let downRight = down.bind(this, updateRight, "right");

		leftArrow.addEventListener("mousedown", downLeft);
		leftArrow.addEventListener("mouseup", upLeft);

		rightArrow.addEventListener("mousedown", downRight);
		rightArrow.addEventListener("mouseup", upRight);
		
	}

	render(){

		return (
			<>
			<svg height="71" width="41" className="triangleSVG triangleLeft" style={{display:"none"}}>
				<polygon points="31,20.5 31,50.5 10,35.5" />
			</svg>
			<svg height="71" width="41" className="triangleSVG triangleRight">
				<polygon points="10,20.50 10,50.5 31,35.5" />
			</svg>
			<div id="sliderMenu">
				{this.renderLinks()}
			</div>
			</>
		);
	}

	
}


function update(direction, menu, up) {


	let rect = menu.getBoundingClientRect();

	
	if (direction>0 && menu.scrollLeft>=menu.scrollWidth-rect.width+14){
		menu.scrollLeft=menu.scrollWidth-rect.width+114;
		up();
	} else if (direction < 0 && menu.scrollLeft<=21){
		menu.scrollLeft=0;
		up();
	} else{

		menu.scrollLeft+=direction;
		


	}
}

function down(update, side) {
	interval[side] = setInterval(update, 5);
}

function up(side) {
	clearInterval(interval[side]);
}

export default withRouter(SliderMenu);