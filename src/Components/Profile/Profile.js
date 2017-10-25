import React, {Component} from 'react';
import '../../CSS/Profile.css';

// Unqiue profile for each user listed. findAndEditThisUser an event handler that locates the user via index number. 

export default class Profile extends Component {

	render(){
	const {findAndEditThisUser, title, name, city, phone, email, EA, favQoute,
			funFact, photo} = this.props;
	return (
		<div className="profile">
			<img className="mug_shot" alt="mug shot" src={photo} />
		    <div className="user_title">{title}</div> 
		    <div className="user_name">{name}

		    <span className="user_local">, {city}</span>
		    </div>

		    <div className="user_phone">{phone}</div>
		    <div className="user_email">{email}</div>
		    <div className="user_ea"> EA: {EA} </div> 
		    <div className="user_qoute">{favQoute}</div>
		    <div className="user_funFact">{funFact}</div>
		     <a className="KnowProfile" href="KNowing">Know</a>
		   <a>
          	  <i onClick={e => findAndEditThisUser()}
          	  	data-toggle="modal" data-target="#myModal"
          	  	className="fa fa-pencil"></i>
           </a>
         
		  </div>
	)




	}
}

