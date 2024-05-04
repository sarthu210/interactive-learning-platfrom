import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


export default function ProfileBtn() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return isAuthenticated ?  (
      <button className="mr-4" >My Profile!</button>
   
  ) : null;
}

