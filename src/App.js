import React, { Component } from 'react';
import {Header, 
		TopGreeting, 
		MidGreeting, 
	} from './Components/index';

import {
  ProfileRowContainer,
  EditProfileContainer
} from './Containers/index';
	
import './CSS/Normalize.css';

// import axios from 'axios';


class App extends Component {

  render() {
    return (
      <div className="Main">
      	<TopGreeting/>
        <Header/>
        <MidGreeting/>
        <ProfileRowContainer/>
        <EditProfileContainer/>
      </div>
    );
  }
}

export default App;
