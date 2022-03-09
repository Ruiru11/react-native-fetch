import {configureStore} from '@reduxjs/toolkit';
import fetchData from '../Reducers/dataFatch';
import login from '../Reducers/login';

const store = configureStore({
  reducer: {
    login: login,
    fetchData: fetchData,
  },
});
export default store;
