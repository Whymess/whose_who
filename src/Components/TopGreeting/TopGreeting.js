import React from 'react';
import '../../CSS/Greet.css';

export default (props) => { 
	return (
	  		<div className="top_greeting">
	  			<div className="teamName"> TeamPage </div>
		  		<img className="main_teamLogo" src={require('../../Assets/Images/logo.png')} alt="Mckinsey And Company"/>
		  		<div className="Greet_person"> Hi, Mike </div>
	 		</div>
	 )
}
