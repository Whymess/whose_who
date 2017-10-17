// dependencies 
import assign from 'lodash/assign';
// To do import single func
import _ from 'lodash';

// local dependencies
import {USER_PROFILE, EDIT_USER_PROFILE, UPDATE_PHOTO} from '../../Constants/index';

// Must be a better way to do this..
// var initState = DefaultUsers()
import {defaultState} from '../../Reducers/InitalState/InitalState';

// reducer
export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_PROFILE:
      let profileIndexNumOfUser = payload[0]
      let profieOfUser = payload[1][profileIndexNumOfUser]
      return assign({}, state, {
        modalUser: profieOfUser,
        indexNumberOfUser: profileIndexNumOfUser
      });

    case EDIT_USER_PROFILE:
          profileIndexNumOfUser = payload[0]
         
          let newfavQoute = payload[1]
          let newfunFact = payload[2]
            
          // REMEMBER TO USE SLICEEEEE. DONT MUTATE STATE. 
          var currentUsers = state.DefaultUsers.slice()
          
  
          _.forEach(currentUsers, function(value, key) {
              if(profileIndexNumOfUser === key){
                   if(newfavQoute.length !== 0){
                     value['favQoute'] = newfavQoute
                   }
                   if(newfunFact.length !== 0){
                      value['funFact'] = newfunFact
                   }
              }
          });

        // return {...state, DefaultUsers:currentUsers }

      return assign({}, state, {
          DefaultUsers:currentUsers
      });

     case UPDATE_PHOTO:
        console.log(payload)


     return assign({}, state, {
         
      });

    default:
      return state
  }
}