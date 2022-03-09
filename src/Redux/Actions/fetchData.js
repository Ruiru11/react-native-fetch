import * as TYPES from '../Constants';
import {loadData} from '../Network/fetch';

export const loadDataAction = token => dispatch => {
  dispatch({type: TYPES.FETCH_DATA});
  loadData(token).then(response => {
    console.log('response for fetchData', response);
    try {
      if (Array.isArray(response)) {
        dispatch({
          type: TYPES.FETCH_DATA_SUCCESS,
          payload: response,
        });
      } else {
        dispatch({
          type: TYPES.FETCH_DATA_FAILURE,
          payload: response,
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.FETCH_DATA_FAILURE,
        payload: error,
      });
    }
  });
};
