import React, {Component} from 'react';
import {Profile} from '../../Components/index';
import '../../CSS/ProfileRow.css';


export default class ProfileRow extends Component {

	  findUserProfile = (index) => {
	  	 this.props.UserProfile(index, this.props.DefaultUsers)
	  }

	 render(){
  
  	  return (
        <div className="user_profiles"> 
        	  {
	 	this.props.DefaultUsers.map((user, index) => {

	 		return <Profile
	 				findAndEditThisUser={e => this.findUserProfile(index)}
	 				name={user.name}
	 				title={user.title}
	 				city={user.city}
	 				phone={user.phone}
	 				email={user.email}
	 				favQoute={user.favQoute}
	 				EA={user.EA}
	 				funFact={user.funFact}
	 				photo={user.photo}
	 				key={index}
	 				/>
	 	})
	 }
        </div>
    )
  }

}

	

