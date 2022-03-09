import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../Constants/';

let initialState = {
  error: '',
  fetchDataLoad: false,
  fetchDataResponse: [],
};

const fetchData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        fetchDataResponse: action.payload,
        fetchDataLoad: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetchDataResponse: action.payload,
        fetchDataLoad: false,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        fetchDataResponse: action.payload,
        fetchDataLoad: false,
      };
    default:
      return state;
  }
};

export default fetchData;
