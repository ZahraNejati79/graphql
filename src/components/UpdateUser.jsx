import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const UPDATE_USER = gql`
  mutation updatedUser($id: ID!, $name: String!) {
    updateUser(id: $id, input: { name: $name }) {
      id
      name
      email
    }
  }
`;
const UpdatedUser = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [updatedUser, { loading, data, error, called }] = useMutation(
    UPDATE_USER,
    {
      variables: {
        id: id,
        name: name,
      },
    }
  );
  return (
    <div>
      <input
        type="text"
        value={id}
        placeholder="id"
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => updatedUser()}>click to update</button>
      {console.log({ loading, data, error, called })}
      {loading && <h3>loading</h3>}
      {error && <h3>error</h3>}
      {data && <h3>{data.updateUser.name}</h3>}
    </div>
  );
};

export default UpdatedUser;
