import React, { Component } from 'react';
import {Header, 
		TopGreeting, 
		MidGreeting, 
	} from '../../Components/index';

import {
  ProfileRowContainer,
  EditProfileContainer
} from '../../Containers/index';

import { auth, database } from '../../firebase';
import pick from 'lodash/pick';
import map from 'lodash/map';

import '../../CSS/Normalize.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: ''
    }
    
  }


  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if(user) {
        this.usersRef = database.ref('/users')
        this.userRef = this.usersRef.child(user.uid)

        this.userRef.once('value').then((snapshot) => {
            if(snapshot.val()) return;
            console.log(user, "user")

            const userData = pick(user, ['displayName', 'photoURL', 'email', 'uid']);
            this.setState({user: userData})
           
        });
   
       // this.usersRef.on('value', (snapshot) => {
       //    this.setState({user: snapshot.val()});
       // });
      }
    });


   
  }


  render() {
    const { displayName, photoURL, emailuid } = this.state.user;

    return (
      <div className="Main">
      {
        displayName 
          ?
          <TopGreeting displayName={displayName}/>
       : 
        <TopGreeting/>
      }


        <Header/>
        <MidGreeting/>
        <ProfileRowContainer/>
        <EditProfileContainer/>
      </div>
    );
  }
}

export default App;
