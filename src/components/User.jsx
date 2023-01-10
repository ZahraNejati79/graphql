import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: 2) {
      id
      name
      email
    }
  }
`;
const User = () => {
  const [id, setId] = useState(1);
  const changeHandler = (e) => {
    setId(e.target.value);
  };
  const { loading, data, error } = useQuery(GET_USER, {
    variables: { id: id },
  });
  if (loading) return <h3>Loading</h3>;
  if (error) return <h3>you have error</h3>;
  return (
    <div>
      <input type="number" value={id} onChange={changeHandler} />
      <div key={data.user.id}>
        <div>{data.user.name}</div>
        <div>{data.user.email}</div>
      </div>
    </div>
  );
};

export default User;
