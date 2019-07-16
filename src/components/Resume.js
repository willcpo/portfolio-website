import React from "react";
import ResumeJSON from "../ResumeJSON.js";
//import * as api from "../api";

class Resume extends React.Component {

	constructor(props){
		super(props);

		//Remember to set 'this' to the component for all custom functions
		this.renderResume = this.renderResume.bind(this);
		this.renderRowCategories = this.renderRowCategories.bind(this);
		this.renderRowLeaves = this.renderRowLeaves.bind(this);
	}

	componentDidMount(){
		let collapsable = document.querySelectorAll(".rowNum0, .rowNum1, .rowNum2, .rowNum3, .rowNum4");

		for (let i = 0; i < collapsable.length; i++) {
			collapsable[i].addEventListener("click", function() {
				var content = this.nextElementSibling;
				if (content.style.maxHeight){
					content.style.maxHeight = null;
					collapsable[i].firstChild.src="img/collapsed.png";
				} else {

					let node = content;
					let index = 0;
					while(!node.classList.contains("resumeContent")){
						
						let func=(node, index)=>{

							for(let i = 0; i <= index; i++){
								node.style.maxHeight = node.scrollHeight + "px";
							}
						};
						setTimeout(func.bind(this,node,index), 200*index++);
						node.previousElementSibling.firstChild.src="img/expanded.png";

						node = node.parentElement.parentElement;
					}
				} 
			});
		}

		let topLevelRows = document.querySelector(".resumeContent").childNodes;

		topLevelRows[1].firstChild.click();
		setTimeout(()=>{topLevelRows[1].childNodes[1].firstChild.firstChild.click();},200);
		setTimeout(()=>{topLevelRows[1].childNodes[1].firstChild.childNodes[1].childNodes[1].firstChild.click();},400);
	
		topLevelRows[2].firstChild.click();

		topLevelRows[4].firstChild.click();
	
	}

	renderResume(){
		return Object.keys(ResumeJSON).map((name,index)=>{
			return (
				<div key={"A"+index}>
					<div className={"resumeRow category rowNum0"}>
						<img  className="resumeArrow" src="/img/collapsed.png"/>
						<p className="resumeText">
							{name}
						</p>
					</div>
					<div className="collapsedcontent">
						{this.renderRowCategories(ResumeJSON[name], "A"+index, 1)}
					</div>
				</div>
			);
		});
	}

	renderRowCategories(object, key, rowNum){
		return Object.keys(object).map((name,index)=>{
			if(name =="Info"){
				return(
					<div key={"C"+key+index}>
						<div className={"resumeRow leaf info rowNum"+rowNum} >
							<img className="resumeDot" src="/img/LeafRowHandle.png"/>
							<p className="resumeText">
								{object[name][0]}
							</p>
						</div>
						<div className={"resumeRow leaf info rowNum"+rowNum}>
							<img className="resumeDot" src="/img/LeafRowHandle.png"/>
							<p className="resumeText">
								{object[name][1]}
							</p>
						</div>
					</div>
				);
			} else if (Array.isArray(object[name])){
				return (
					<div key={key+"D"+index}>
						<div className={"resumeRow category rowNum"+rowNum} >
							<img className="resumeArrow" src="/img/collapsed.png"/>
							<p className="resumeText">
								{name}
							</p>
						</div>
						<div className="collapsedcontent">
							{this.renderRowLeaves(object[name], key+"E"+index, rowNum+1)}
						</div>
					</div>
				);
			}else{
				return (
					<div key={key+"D"+index}>
						<div className={"resumeRow category rowNum"+rowNum}>
							<img className="resumeArrow" src="/img/collapsed.png"/>
							<p className="resumeText">
								{name}
							</p>
						</div>
						<div className="collapsedcontent">
							{this.renderRowCategories(object[name], key+"E"+index, rowNum+1)}
						</div>
					</div>
				);
			}
		});
	}

	renderRowLeaves(array, key, rowNum){
		return array.map((row,index)=>{
			return (
				<div className={"resumeRow leaf rowNum"+rowNum} key={key+index}>
					<img className="resumeDot" src="/img/LeafRowHandle.png"/>
					<p className="resumeText">
						{row}
					</p>
				</div>
			);
		});
	}


	render(){
		return (
			<div className="resumeContent">
				<a href="/Resume-Will-Powers.pdf " download className="pdf">⬇︎ Download PDF</a>
				{this.renderResume()}
			</div>
		);
	}

	
}

export default Resume;