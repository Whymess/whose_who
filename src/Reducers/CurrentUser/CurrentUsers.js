// dependencies 
import assign from 'lodash/assign';
// To do import single func
import _ from 'lodash';

import {SAVE_INFO_ON_LOGIN_USER} from '../../Constants/index';



export default  (state = {}, action) => {
	 const { type, payload } = action;
	 switch (type) { 
	 	case SAVE_INFO_ON_LOGIN_USER:
	 		

	 	return assign({}, state, {
        	
     	});

	  default:
    	return {}
	 }



}