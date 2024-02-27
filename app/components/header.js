import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{
	constructor(props){
		super(props);
	
		this.state={
			SmallMenuGalleryClass:"HideSmallNavList",
			SmallMenuNoteClass:"HideSmallNavList"
		};
	}
	toggleNav=(e)=>{
			console.log(e);	
			
			if (this.state[e]=="HideSmallNavList"){
				this.setState({[e]:'AppearSmallNavList'})
				console.log('eksw');
			}else{
				this.setState({[e]:'HideSmallNavList'})
				console.log('mesa');
			}
		console.log(this.state[e]);
	}
	
	render(){
					return (

				<div className="header">
	<div className="header__Info">
		<h1 className="header__Info__Logo"><a href="Home"></a></h1>
		<div className="header__Info__RightMenu">
			<div className="header__Info__RightMenu__Search">
				<input id="Search" type="text" placeholder="Search..."/></div>
			<div className="header__Info__RightMenu__Menu" id="Timer"></div>
			<div className="header__Info__RightMenu__SmallScreenMenu" ></div>	
		</div>
	</div>

	<div className="header__Image">	
		<img id="CurrentImage" src="app/src/images/img1.png"/>
		<div className="header__Image__SmallMenu" role="navigation">
		<nav>
			<ul>
				<li><a href="index"><p>Home</p></a></li>
				<li className="header__Image__SmallMenu__GalleryList">						
<a href="#" onClick={this.toggleNav.bind(this,"SmallMenuGalleryClass")} aria-current="page"><p>Gallery ↓</p></a>
							<ul className={this.state.SmallMenuGalleryClass}>								
								<li><NavLink to="/page1"><p>Games</p></NavLink></li>
								<li><NavLink to="index"><p>Photos</p></NavLink></li>
								<li><NavLink to="index"><p>Music</p></NavLink></li>
								<li><NavLink to="index"><p>Movies</p></NavLink></li>
							</ul>
								

				</li>
				<li className="header__Image__SmallMenu__NotesList">
								<a href="#"  onClick={this.toggleNav.bind(this,"SmallMenuNoteClass")}  aria-current="page" ><p>Notes &darr;</p></a>
								<ul  className={this.state.SmallMenuNoteClass}>
								<li><a href=""><p>New note</p></a></li>
								<li><a href=""><p>Check notes</p></a></li>
							</ul>
				</li>
				<li><a href="AboutMe"><p>AboutMe</p></a></li>
			</ul>
		</nav>
		</div>




	</div>
	<div className="header__Nav" role="navigation">
		<nav>
			<ul>
				<li><a href="index">Home</a></li>
				<li className="header__Nav__GalleryList"><div className="bigger">Gallery 🠗</div><div className="header__Nav__GalleryList__InnerList">
									<div id="Games__MainNav"><a href="games">Games</a></div>
									<div id="Photos__MainNav"><a>Photos</a></div>
									<div id="Music__MainNav"><a>Music</a></div>
									<div id="Movies__MainNav"><a>Movies</a></div>
													</div></li>
				<li className="header__Nav__NotesList"><div className="bigger">Notes 🠗</div> <div className="header__Nav__NotesList__InnerList">
									<div id="NewNote__MainNav"><a>New note</a></div>
									<div id="CheckNotes__MainNav"><a>Check notes</a></div>

															</div></li>
				<li><a href="AboutMe">AboutMe</a></li>
			</ul>
		</nav>
	</div>
</div>

)
	}
}

export default Header;