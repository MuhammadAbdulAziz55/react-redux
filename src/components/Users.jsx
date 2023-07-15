import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../services/actions/usersAction";

const Users = () => {
  const { isLoading, users, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      <h3>Users Info App</h3>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>error,message</h3>}
      <section>
        {users &&
          users.map((user) => {
            return (
              <article key={user.id}>
                <h4>{user.name}</h4>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default Users;
