import axios from 'axios';
import { SET_USER_AUTH } from './actionTypes';

export function setUserAuth(isAuth) {
  return { type: SET_USER_AUTH, payload: isAuth };
}

export function fetchUserAuthStatus() {
  return (dispatch) => {
    axios.get('/auth/checkAuth')
      .then((res) => {
        return dispatch(setUserAuth(res.data.status));
      })
      .catch(err => console.log(err));
  };
}
