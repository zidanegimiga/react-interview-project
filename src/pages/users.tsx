/*eslint-disable */
import { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from "axios";
import { baseUrl} from "../../lib/users";
import { getSuiteCount } from "../components/utils/utils";
import Navbar from "../components/global/Navbar";
import UserCard from "../components/Users/UserCard";
import StatsCard from "../components/Users/StatsCard";
import styles from "../../styles/Users.module.scss";
import TitleBar from "../components/global/TitleBar";

const Users = ({users}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const response = getSuiteCount(users);

  return (
    <>
      <TitleBar title="Users"/>
      <Navbar />
      <div className={styles.wrapper}>
        <h1>User</h1>

        <div className={styles.main}>
          <div className={styles.userCardsContainer}>
            {users?.map((user) => (
              <UserCard {...user} />
            ))}
          </div>

          <div className={styles.rightSection}>
            {/* <SearchBar data={data}/> */}
            <StatsCard {...response} />
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const {data: users} = await axios.get(baseUrl.concat("/users"));

  return {
    props: {
      users
    },
    revalidate: 5
  }
}

export default Users;
