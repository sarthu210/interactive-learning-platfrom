import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from "./slices/authReducer";
import { enroll } from './slices/courseReducer';
import { Outlet } from 'react-router-dom'
import { NavBar, Footer } from "../components/index"



export default function App() {
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();



  React.useEffect(() => {
    axios.get("http://localhost:3000/auth/user", { withCredentials: true })
        .then((response) => {
            dispatch(login(response.data)) 
        })
        .catch((error) => {
            if (error.response && error.response.status !== 401) {
                console.log("Error:", error.message);
            }
        })
        .finally(() => {
            setLoading(false)
        })
}, []);

React.useEffect(() => {
  axios.get("http://localhost:3000/course/user-courses", { withCredentials: true })
      .then((response) => {
          dispatch(enroll(response.data))
      })
      .catch((error) => {
          if (error.response && error.response.status !== 401) {
              console.log("Error:", error.message);
          }
      })
      .finally(() => {
          setLoading(false)
      })
}, []);






  return !loading ? (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null
}

