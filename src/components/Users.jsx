import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
  query {
    users {
      data {
        id
        name
        email
        phone
      }
    }
  }
`;

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
