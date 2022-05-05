/*eslint-disable*/
import styles from "../../../styles/Posts.module.scss";

const Post = (props) => {
  const post = props.post;
  console.log("Posts: ", post)
  return (
    post?.map((post) =>(
        <div className={styles.PostCard} key={post.id}>
            <span className={styles.postName}>{post.name}</span>
            <span className={styles.postTitle}>{post.title}</span>
            <span className={styles.postBody}>{post.body}</span>
        </div>
    ))
  )
}

export default Post