/* eslint-disable */
import { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from "axios";
import { baseUrl } from "../../lib/users";
import {getPostsWithUsers} from "../components/utils/utils";
import Navbar from "../components/global/Navbar";
import Post from "../components/posts/Post";
import styles from "../../styles/Posts.module.scss"

const posts = ({postsbyUsers}: InferGetStaticPropsType<typeof getStaticProps>) => {
      
  return (
    <div>
      <Navbar />
      <div className={styles.mainContainer}>
        <h1>Posts</h1>
        <Post post={postsbyUsers}/>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const {data: posts} = await axios.get(baseUrl.concat("/posts"));
  const {data: users} = await axios.get(baseUrl.concat("/users"));

  const postsbyUsers = getPostsWithUsers(users, posts);

  return {
    props: {
      postsbyUsers
    },
    revalidate: 5
  }
}

export default posts;