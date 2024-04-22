import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function LoginBtn() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return !isAuthenticated ?  (
    <Link to="/login">
      <button className="mr-4" >Login</button>
    </Link>
  ) : null;
}

