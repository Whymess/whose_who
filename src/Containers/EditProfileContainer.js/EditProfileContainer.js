// Dependencies
import { connect } from 'react-redux';
import React from 'react';
import { bindActionCreators } from 'redux';

// local dependencies
import {EditProfile} from '../../Components/index';

import {EditUserProfile } from '../../Actions/EditProfile';

const EditProfileContainer = (props) => {
   return (
    	<EditProfile {...props}/>
    )
}

const mapStateToProps = (state) => {
  return {
  	EditUser: state.User,
  	indexNumberOfUser: state.User.indexNumberOfUser
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
	EditUserProfile: EditUserProfile,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileContainer);