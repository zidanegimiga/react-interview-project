/*eslint-disable */
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { baseUrl } from "../../../lib/users";
import TitleBar from "../../components/global/TitleBar";
import Navbar from "../../components/global/Navbar";
import Post from "../../components/posts/Post";
import styles from "../../../styles/User.module.scss";
import Button from "../../components/global/Button";

export const getStaticPaths = async () => {
  const { data } = await axios.get(baseUrl.concat("/users"));

  const paths = data?.map((user) => {
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

  return {
    props: { user, posts},
  };
};

const User = ({ user, posts }) => {
  const [showProfileEditor, setShow] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>(user.name);

  const handleShowProfileClick = () =>{
    setShow(!showProfileEditor)
  }

  function updateUserName() {
    axios
      .put(`${baseUrl}/${user.id}`,
        userName
      )
      .then((response) => {
        setUserName(response.data);
      });
  }

  return (
    <div>
      <TitleBar title={user.name}/>
      <Navbar />
      <div className={styles.pageWrapper}>
        <div className={styles.userInfoSide}>
          <div className={styles.header}>
            <span className={styles.name}>{userName}</span>
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
            <button 
              className={styles.editProfile} 
              onClick={handleShowProfileClick}> Edit Profile </button>
          </div>

          {showProfileEditor && <div className={styles.profileEditor}>
            <form onSubmit={updateUserName}>
              <input placeholder="Type username"  value={userName} className={styles.input} type="text" />
              <Button margin="8px" type="submit"> Edit Username</Button>
            </form>         
          </div>}

          <div className={styles.contactsSection}>
            <span className={styles.cardTitle}> Contacts</span>
            <div className={styles.contactsCard}>
              <div className={styles.contactCardContent}>
                <Image src={"/mail.svg"} width={20} height={20} alt="mail icon"/>
                <span className={styles.locationName}>{user.email}</span>
              </div>
              <div className={styles.contactCardContent}>
                <Image src={"/phone.svg"} width={20} height={20} alt="name icon"/>
                <span className={styles.locationName}>{user.company.name}</span>
              </div>
              <div className={styles.contactCardContent}>
                <Image src={"/website.svg"} width={20} height={20} alt="name icon"/>
                <span className={styles.locationName}>{user.company.name}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.postsSide}>
          <Post post={posts} showUsername={false}/>
        </div>
      </div>
    </div>
  );
};

export default User;
