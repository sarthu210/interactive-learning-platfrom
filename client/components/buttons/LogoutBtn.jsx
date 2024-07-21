import { useDispatch } from 'react-redux';
import { logout as logoutAction } from '../../src/slices/authReducer'; // replace with your actual logout action
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetStateAction } from './action';

export default function UserLogout() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const navigate = useNavigate()
  
  const logout = async () => {
    try {
      // Send a request to the server to end the session
      await axios.post("http://localhost:3000/auth/logout", {}, { withCredentials: true });

      // Dispatch the logout action
      dispatch(logoutAction());

       // Dispatch the reset state action
      dispatch(resetStateAction());

      // Clear local storage
      localStorage.clear();

      // Clear cookies
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
      
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return isAuthenticated ?  (
    <button onClick={logout}>Logout</button>
  ) : null;
}

