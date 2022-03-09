import * as TYPES from '../Constants';
import {login} from '../Network/fetch';
import {EventRegister} from 'react-native-event-listeners';

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
      }
    } catch (error) {
      dispatch({
        type: TYPES.LOGIN_FAILURE,
        payload: error,
      });
    }
  });
};
