import React from "react";
import SliderMenu from "./SliderMenu";
import projectInfo from "../projectInfo";
//import * as api from "../api";

class Projects extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			projectNum: 0,
			githubLink: projectInfo[0].githubLink,
			infoRows: projectInfo[0].infoRows
		};

		//Remember to set 'this' to the component for all custom functions
		this.renderProject = this.renderProject.bind(this);
		this.chooseProject = this.chooseProject.bind(this);
	}

	renderProject(){
		return this.state.infoRows.map((row)=>{
			return (
				<div key={row.src} className="projectRow">
					<div className="projectImg">
						<img src={row.src}/>
					</div>
					<div className="projectText">
						<p>{row.text}</p>
					</div>
				</div>
			);
		});
	}

	chooseProject(projectNum){
		this.setState({
			projectNum: projectNum,
			githubLink: projectInfo[projectNum].githubLink,
			infoRows: projectInfo[projectNum].infoRows
		});
		
	}

	render(){
		return (
			<>
			<SliderMenu context={this.props.context} chooseProject={this.chooseProject} projectNum={this.state.projectNum}/>
			<div className="projectBox">
				{this.renderProject()}
			</div>
			<a className="githubLink" href={this.state.githubLink}> ↳ Link to Github  </a>
			</>
		);
	}

	
}

export default Projects;