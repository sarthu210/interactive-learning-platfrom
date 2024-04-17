import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from "./slices/authReducer";
import { Outlet } from 'react-router-dom'
import { NavBar, Footer } from "../components/index"


function App() {
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

export default App