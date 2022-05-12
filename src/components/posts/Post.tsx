/*eslint-disable*/
import styles from "../../../styles/Posts.module.scss";

const Post = (props) => {
  const post = props.post;
  return (
    post?.map((post) =>(
        <div className={styles.PostCard} key={post.postId}>
            <span className={styles.postName}>{post.userName}</span>
            <span className={styles.postTitle}>{post.title}</span>
            <span className={styles.postBody}>{post.body}</span>
        </div>
    ))
  )
}

export default Post