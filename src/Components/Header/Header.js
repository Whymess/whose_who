import React from 'react';
import '../../CSS/Header.css';

export default (props) => {
	return (
	   <div className="header_main">
	  		<div className="title"> Vandelay Industries, Inc </div>
		         <div className="company_data_grid"> 

		         	<div className="column"> 
		         		<span className="industry_pratice_title">Industry Pratice </span> 
		         		 <span className="pratice_info"> High Tech, Media, Telecom </span>
		         	 </div>
		         	 <div className="column first_row">
	           				About the client 
	         		 </div>
	         		 <div className="column first_row">
	           				  Resources
	         		 </div>

	         		{/* Second Row */}
	         		 <div className="column Objective second_row"> 
		         	       Project Objective
		         	 </div>
		         	 <div className="column second_row">
	           				http://www.vandelay.com
	         		 </div>
	         		 <div className="column second_row know">
	           				  Know
	         		 </div>

	         		{/* Third Row */}
	         		 <div className="column description"> 
		         		 Increase effiencies. Vandelay recently merged <br />
	           				 with two of its competitors. The client would like to <br /> identify synergies that would result in 20% savings <br />
	           				 over the next year
		         	 </div>
		         	 <div className="column">
	           				<div className="address_two">
				              720 Olive St <br />
				              St. Louis MO<br />
				              63101  <br />
				              USA MAP
				            </div>
				            <div className="address_one">
				              120 Jay St <br />
				              New York, NY <br />
				              10025 <br />
				              USA MAP
				            </div>
	         		 </div>
	         		 <div className="column third_row boxFiles">
	           				 Project files on Box
	         		 </div>
	         		 
	         		 
		        </div>
		        
		        
	  </div>
	)
}