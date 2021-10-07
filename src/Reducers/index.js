import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { forgotpass } from './forgotpass.reducer';
import { resetpass } from './resetpass.reducer';
import admin from './admin.reducer';
import absent from './absent.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  forgotpass,
  resetpass,
  alert,
  admin,
  absent,
});

export default rootReducer;
