/*eslint-disable */
import useSWR from "swr";
import { baseUrl, getUsers } from "../../lib/users";
import { getSuiteCount } from "../components/utils/utils";
import Navbar from "../components/global/Navbar";
import UserCard from "../components/Users/UserCard";
import StatsCard from "../components/Users/StatsCard";
import styles from "../../styles/Users.module.scss";

const Users = () => {
  const { data, isValidating } = useSWR(baseUrl.concat("/users"), getUsers);
  const response = getSuiteCount(data);

  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <h1>User</h1>
        {isValidating ? <p> Loading</p> : null}

        <div className={styles.main}>
          <div className={styles.userCardsContainer}>
            {data?.map((user) => (
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

export default Users;
