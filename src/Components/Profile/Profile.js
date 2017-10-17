import React, {Component} from 'react';
import '../../CSS/Profile.css';


export default class Profile extends Component {

	render(){
	
	return (
		<div className="profile">
			<img alt="mug shot" src={require('../../Assets/Photos/Four.png')} />
		    <div className="user_title">{this.props.title}</div> 
		    <div className="user_name">{this.props.name}

		    <span className="user_local">, {this.props.city}</span>
		    </div>

		    <div className="user_phone">{this.props.phone}</div>
		    <div className="user_email">{this.props.email}</div>
		    <div className="user_ea"> EA: {this.props.EA} </div> 
		    <div className="user_qoute">{this.props.favQoute}</div>
		    <div className="user_funFact">{this.props.funFact}</div>
		     <a className="KnowProfile" href="KNowing">Know</a>
		   <a>
          	  <i onClick={e => this.props.findAndEditThisUser(this.props.index)}
          	  	data-toggle="modal" data-target="#myModal"
          	  	className="fa fa-pencil"></i>
           </a>
         
		  </div>
	)




	}
}

