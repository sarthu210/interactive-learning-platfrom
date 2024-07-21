import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function LoginBtn() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return !isAuthenticated ?  (
    <Link to="/login">
      <button className="mr-4 mt-4 border-[1px] rounded-lg hover:bg-black hover:text-white border-black p-3 px-5" >Login</button>
    </Link>
  ) : null;
}

