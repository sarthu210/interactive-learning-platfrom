import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../slices/authReducer";
import courseReducer from '../slices/courseReducer';
import submitReducer from '../slices/submitReducer';
import levlesReducer from '../slices/levlesReducer';

const store = configureStore({
  reducer : {
    auth: authReducer,
    course: courseReducer,
    submit: submitReducer,
    levels: levlesReducer
  }
})

export default store;