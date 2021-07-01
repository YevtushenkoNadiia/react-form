import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/api/users.api";

const UsersList = () => {
  const dispatch = useDispatch();

  // const state = useSelector((state) => state);
  const { loading, users } = useSelector(({ users }) => users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (!users || loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UsersList;
