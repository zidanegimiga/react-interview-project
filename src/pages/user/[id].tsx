/*eslint-disable */
import Image from "next/image";
import axios from "axios";
import { baseUrl } from "../../../lib/users";
import TitleBar from "../../components/global/TitleBar";
import Navbar from "../../components/global/Navbar";
import Post from "../../components/posts/Post";
import styles from "../../../styles/User.module.scss";

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
  const {data: user} = await axios.get(baseUrl.concat("/users/" + id));
  const {data: posts} = await axios.get(baseUrl.concat("/posts?userId=" + id));
  console.log(posts);
  return {
    props: { user, posts},
  };
};

const User = ({ user, posts }) => {
  return (
    <div>
      <TitleBar title={user.name}/>
      <Navbar />
      <div className={styles.pageWrapper}>
        <div className={styles.userInfoSide}>
          <div className={styles.header}>
            <span className={styles.name}>{user.name}</span>
            <span className={styles.userName}>@{user.username}</span>
            <div className={styles.companyAndCityContainer}>
              <div className={styles.company}>
                <Image src={"/company.svg"} width={20} height={20} alt="company icon"/>
                <span className={styles.companyName}>{user.company.name}</span>
              </div>
              <div className={styles.location}>
                <Image src={"/location.svg"} width={20} height={20} alt="company icon"/>
                <span className={styles.locationName}>{user.company.name}</span>
              </div>
            </div>
            <button className={styles.editProfile}>Edit Profile</button>
          </div>
          <div className={styles.contactsSection}>
            <span> Contacts</span>
            <div className={styles.contactsCard}>
              <div className="email"></div>
              <div className="telephone"></div>
              <div className="website"></div>
            </div>
          </div>
          <div className={styles.map}> Map </div>
        </div>
        <div className={styles.postsSide}>
          <Post post={posts} showUsername={false}/>
        </div>
      </div>
    </div>
  );
};

export default User;
