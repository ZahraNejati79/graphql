import { useLazyQuery, useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_USER } from "../graphql/queries";

const UserOnClick = () => {
  const [id, setId] = useState(1);
  const changeHandler = (e) => {
    setId(e.target.value);
  };
  const [getUser, { loading, data, error }] = useLazyQuery(GET_USER, {
    variables: { id: id },
  });

  return (
    <div>
      <input type="number" value={id} onChange={changeHandler} />
      <button onClick={() => getUser()}>گرفتن یوزر</button>
      {loading && <h3>Loading</h3>}
      {error && <h3>you have error</h3>}
      {data && (
        <div key={data.user.id}>
          <div>{data.user.name}</div>
          <div>{data.user.email}</div>
        </div>
      )}
    </div>
  );
};

export default UserOnClick;
