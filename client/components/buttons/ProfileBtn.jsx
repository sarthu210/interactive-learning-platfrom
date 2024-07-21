import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function ProfileBtn() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const navigate = useNavigate()

  function gotoProfile(){
    navigate('/profile')
  }

  return isAuthenticated ?  (
      <button className="mr-4" onClick={gotoProfile}>My Profile!</button>
   
  ) : null;
}

