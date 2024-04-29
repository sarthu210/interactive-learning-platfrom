import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../slices/authReducer";
import courseReducer from '../slices/courseReducer';
import submitReducer from '../slices/submitReducer';

const store = configureStore({
  reducer : {
    auth: authReducer,
    course: courseReducer,
    submit: submitReducer
  }
})

export default store;