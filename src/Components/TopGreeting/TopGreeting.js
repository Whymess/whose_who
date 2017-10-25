import React from 'react';
import '../../CSS/Greet.css';
import { auth, googleAuthProvider } from '../../firebase';

export default (props) => { 
    if(props.displayName){
       var temp = props.displayName.split(" ")
       var firstNameOnly = temp[0]
    }
	
	return (
	  		<div className="top_greeting">
	  			<div className="teamName"> TeamPage </div>
		  		<img className="main_teamLogo" src={require('../../Assets/Images/logo.png')} alt="Mckinsey And Company"/>
		  		<div 
		  			className="Greet_person"
		  			onClick={() => auth.signInWithPopup(googleAuthProvider)}
		  			> Hi, {firstNameOnly 

		  			}</div>
	 		</div>
	 )
}
