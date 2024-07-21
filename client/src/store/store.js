import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../slices/authReducer";
import courseReducer from '../slices/courseReducer';
import submitReducer from '../slices/submitReducer';
import levlesReducer from '../slices/levlesReducer';
import outputReducer from '../slices/outputReducer';
import inputReducer from '../slices/inputReducer'

const store = configureStore({
  reducer : {
    auth: authReducer,
    course: courseReducer,
    submit: submitReducer,
    levels: levlesReducer,
    output: outputReducer,
    input: inputReducer
  }
})

export default store;