import { useDispatch } from 'react-redux';
import { logout as logoutAction } from '../../src/slices/authReducer'; // replace with your actual logout action
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function UserLogout() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  
  const logout = async () => {
    try {
      // Send a request to the server to end the session
      await axios.post("http://localhost:3000/auth/logout", {}, { withCredentials: true });

      // Dispatch the logout action
      dispatch(logoutAction());

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

