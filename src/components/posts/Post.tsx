/*eslint-disable*/
import Link from "next/link";
import styles from "../../../styles/Posts.module.scss";

const Post = (props) => {
  const post = props.post;
  return (
    <div>
      <h1 className={styles.title}>Posts</h1>
      {post?.map((post) =>(
        <div className={styles.postCard} key={post.postId}>
          <div className={styles.namesContainer}>
            <Link href={`/user/${post.userId}`} passHref>
              <span className={styles.name}>{post.userName}</span>
            </Link>
            {props.showUsername && <span className={styles.userName}>@{post.userName}</span>}
          </div>
          <span className={styles.postTitle}>{post.title}</span>
          <p className={styles.postBody}>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Post