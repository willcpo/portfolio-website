import React from "react";
import Logo from "./LogoName";
import {Link, withRouter} from "react-router-dom";

class NavBar extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			menu: "menu-closed",
			xButton: "xButton-off",
			nav: "Nav-Normal"
		};

		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
		this.checkMenuOpen = this.checkMenuOpen.bind(this);
	}


	showMenu(){

		this.setState({menu: "menu-opening"});
		setTimeout(()=>{
			this.setState({
				menu: "menu-open",
				xButton: "xButton-on",
				nav: "Nav-Mobile"
			});
		},500);

	}

	closeMenu(){

		this.setState({
			menu: "menu-closing",
			xButton: "xButton-off",
			nav: "Nav-Normal"});
		setTimeout(()=>{
			this.setState({	menu: "menu-closed"});
		},500);

	}

	checkMenuOpen(){
		if (this.state.menu=="menu-open"){
			this.closeMenu();
		}
	}

	render(){
		const selected = this.props.location.pathname.split("/")[1];
		return (
			<div className="Navbar">
				<div className="menu" id={this.state.menu}> </div>
				<Logo />
				<div id={this.state.nav}>
					<Link className="navItem" to="/Programming" id={["","acting","film","politics","programming"].includes(selected.toLowerCase())?"selected":""} onClick={this.checkMenuOpen}>My Story</Link>
					<Link className="navItem" to="/Resume" id={selected=="Resume"?"selected":""} onClick={this.checkMenuOpen}>Resume</Link>
					<Link className="navItem" to="/Projects" id={selected=="Projects"?"selected":""} onClick={this.checkMenuOpen}>Projects</Link>
					<Link className="navItem" to="/ContactMe" id={selected=="ContactMe"?"selected":""} onClick={this.checkMenuOpen}>Contact Me</Link>
				</div>
				<img src="/img/menu.png" id="menuButton" onClick={this.showMenu}/>
				<img src="/img/x.png" className="xButton" id={this.state.xButton} onClick={this.closeMenu}/>
			</div>
		);
	}

	
}

export default withRouter(NavBar);