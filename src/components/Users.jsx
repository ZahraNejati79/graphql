import { useQuery } from "@apollo/client";
import { GET_USERS } from "../graphql/queries";

const Users = () => {
  const { data, loading, error } = useQuery(GET_USERS);
  if (loading) return <h3>Loading</h3>;
  if (error) return <h3>you have error</h3>;
  return (
    <div>
      {data.users.data.map((user) => (
        <div key={user.id}>
          <div>{user.name}</div>
          <div>{user.email}</div>
        </div>
      ))}
    </div>
  );
};

export default Users;
