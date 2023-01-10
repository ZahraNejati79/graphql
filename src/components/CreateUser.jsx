import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $username: String!
    $email: String!
    $phone: String!
  ) {
    createUser(
      input: { name: $name, username: $username, email: $email, phone: $phone }
    ) {
      id
      name
      email
    }
  }
`;
const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");

  const [createUser, { loading, data, error, called }] = useMutation(
    CREATE_USER,
    {
      variables: {
        name: name,
        username: userName,
        email: email,
        phone: phone,
      },
    }
  );

  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={userName}
        placeholder="username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        value={phone}
        placeholder="phone"
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={() => createUser()}>click</button>
      {console.log({ loading, data, error, called })}
      {loading && <h3>loading</h3>}
      {error && <h3>error</h3>}
      {data && <h3>{data.createUser.name}</h3>}
    </div>
  );
};

export default CreateUser;
