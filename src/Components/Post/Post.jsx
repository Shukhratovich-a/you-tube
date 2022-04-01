import "./Post.scss";

const Post = ({ post }) => {
  return (
    <li className="post">
      <img className="post__image" src={post.url} alt={post.title} width={250} height={150} />

      <h3 className="post__title">{post.title}</h3>
    </li>
  );
};

export default Post;
