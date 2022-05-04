/* eslint-disable */
import useSwr from "swr";
import { getPosts, baseUrl } from "../../lib/posts";
import { getUsers } from "../../lib/users";
import {getPostsByUsers} from "../components/utils/utils";
import Navbar from "../components/commons/Navbar";
import Post from "../components/posts/Post";
import styles from "../../styles/Posts.module.scss"

const posts = () => {
  const { data: users, isValidating: usersLoading } = useSwr(baseUrl.concat("/users"), getUsers);
  const { data: posts, isValidating: postsLoading } = useSwr(baseUrl.concat("/posts"), getPosts);

  const postsbyUsers = getPostsByUsers(users, posts);
    
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

export default posts;