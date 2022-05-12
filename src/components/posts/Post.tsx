/*eslint-disable*/
import Link from "next/link";
import styles from "../../../styles/Posts.module.scss";

const Post = (props) => {
  const post = props.post;
  return (
    post?.map((post) =>(
        <div className={styles.PostCard} key={post.postId}>
            <Link href={`/user/${post.userId}`} passHref>
              <span className={styles.postName}>{post.userName}</span>
            </Link>
            <span className={styles.postTitle}>{post.title}</span>
            <span className={styles.postBody}>{post.body}</span>
        </div>
    ))
  )
}

export default Post