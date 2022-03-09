import * as TYPES from '../Constants';
import {login} from '../Network/fetch';
import {EventRegister} from 'react-native-event-listeners';
import {snackbar} from '../../Utils/functions';

export const loginAction = data => dispatch => {
  dispatch({type: TYPES.LOGIN});
  login(data).then(response => {
    console.log('response', response.token);
    try {
      if (response.token) {
        dispatch({
          type: TYPES.LOGIN_SUCCESS,
          payload: response,
        });
        EventRegister.emit('loginSuccess');
      } else {
        dispatch({
          type: TYPES.LOGIN_FAILURE,
          payload: response,
        });
        snackbar('Wrong username or password');
      }
    } catch (error) {
      dispatch({
        type: TYPES.LOGIN_FAILURE,
        payload: error,
      });
    }
  });
};
