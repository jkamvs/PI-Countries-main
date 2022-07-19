import { useEffect } from "react";
import { fetchAllUsers } from "../../Store/slices/users";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
const Landing = () => {
  const { list: users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Landing</h1>
      <Link to="/Home">Link</Link>
     
    </div>
  );
};
export default Landing;
