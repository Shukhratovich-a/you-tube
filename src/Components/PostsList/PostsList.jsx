import "./PostsList.scss";

const PostsList = ({ children }) => {
  return <ul className="posts__list">{children}</ul>;
};

export default PostsList;
