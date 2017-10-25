// dependencies
import { combineReducers } from 'redux'

// local dependencies
import User from '../Reducers/EditUsers/EditUsers';
import CurrentUserLogin from '../Reducers/CurrentUser/CurrentUsers';

export default combineReducers({
  User,
  CurrentUserLogin
});