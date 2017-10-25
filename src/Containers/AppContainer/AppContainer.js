// Dependencies
import { connect } from 'react-redux';
import React from 'react';
import { bindActionCreators } from 'redux';

// local dependencies
import {App} from '../../Components/index';
import {LoginUser} from '../../Actions/UserLoggedIn';

const AppContainer = (props) => {
   return (
    	 <App {...props}/>
    )
}

const mapStateToProps = (state) => {
  return {
  
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
	 LoginUser: LoginUser
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);