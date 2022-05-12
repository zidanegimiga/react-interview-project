/*eslint-disable */
import axios from "axios";
import { baseUrl } from "../../../lib/users";

export const getStaticPaths = async () => {
  const { data } = await axios.get(baseUrl.concat("/users"));

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const {data} = await axios.get(baseUrl.concat("/users/" + id));

  return {
    props: { user: data },
  };
};

const User = ({ user }) => {
  return (
    <div>
      <h1>{ user.name }</h1>
      <p>{ user.email }</p>
      <p>{ user.website }</p>
      <p>{ user.address.city }</p>
    </div>
  );
};

export default User;
