import { Link } from "react-router-dom";
import "./Post.scss";

const Post = ({ post }) => {
  return (
    <li className="post">
      <img className="post__image" src={post.url} alt={post.title} width={250} height={150} />

      <h3 className="post__title" title={post.title}>
        {post.title}
      </h3>

      <div className="post__bottom">
        <div className="post__bottom__inner">
          <span className="post__bottom__text">80k views</span>
          <span className="post__bottom__text">3 days ago</span>
        </div>

        <Link className="post__bottom__text post__bottom__link" to={"/channel/1"}>
          Dollie Blair
        </Link>
      </div>
    </li>
  );
};

export default Post;
