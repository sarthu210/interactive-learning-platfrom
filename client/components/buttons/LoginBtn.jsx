import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function LoginBtn() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return !isAuthenticated ?  (
    <Link to="/login">
      <button className="mr-4" >Login</button>
    </Link>
  ) : null;
}

export default LoginBtn;