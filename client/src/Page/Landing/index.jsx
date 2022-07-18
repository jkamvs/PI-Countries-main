import { useEffect } from "react";
import { fetchAllUsers } from "../../Store/slices/users";
import { useDispatch, useSelector } from "react-redux";
const Landing = () => {
  const { list: users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Landing</h1>
    </div>
  );
};
export default Landing;
