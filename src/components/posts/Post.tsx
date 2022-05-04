/*eslint-disable*/
import styles from "../../../styles/Posts.module.scss";

const Post = (props) => {
  const post = props.post;
  console.log("Posts: ", post)
  return (
    post?.map((post) =>(
        <div className={styles.PostCard} key={post.id}>
            <p>{post.name}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    ))
  )
}

export default Post