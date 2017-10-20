// Dependencies
import { connect } from 'react-redux'
import React from 'react';
import { bindActionCreators } from 'redux';

// local dependencies
import {ProfileRow} from '../../Components/index';
import {UserProfile} from '../../Actions/EditProfile';


const ProfileRowContainer = (props) => {
   return (
    	<ProfileRow {...props}/>
    )
}

const mapStateToProps = (state) => {
  return {
     DefaultUsers: state.User.DefaultUsers
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
	UserProfile: UserProfile

}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileRowContainer);