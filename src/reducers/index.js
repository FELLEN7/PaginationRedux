import { combineReducers } from 'redux';
import users from './users';
import pageScope from './pageScope';

export default combineReducers({
  users,
  pageScope
})