import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../slices/authReducer";
import courseReducer from '../slices/courseReducer';

const store = configureStore({
  reducer : {
    auth: authReducer,
    course: courseReducer
  }
})

export default store;