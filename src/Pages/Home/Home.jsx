import React from "react";
import { Link } from "react-router-dom";

import PostsList from "../../Components/PostsList/PostsList";
import Post from "../../Components/Post/Post";
import User from "../../Components/Lib/Icons/User";

import "./Home.scss";

const Home = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos");

      const data = await response.json();

      if (data) {
        setPosts(data.slice(0, 10));
      }
    })();
  }, []);

  return (
    <section className="home">
      <div className="home__top">
        <div className="home__top__inner">
          <User className="home__top__image" width={50} height={50} />

          <Link className="home__top__link" to={"/channel/1"}>
            Dollie Blair
          </Link>
        </div>

        <PostsList className={"posts"}>
          {posts.length > 0 && posts.map((post) => <Post key={post.id} post={post} />)}
        </PostsList>
      </div>

      <div className="home__recommended">
        <div className="home__recommended">
          <h2 className="home__recommended__title">Recommended</h2>

          <PostsList className={"recommended"}>
            {posts.length > 0 && posts.map((post) => <Post key={post.id} post={post} />)}
          </PostsList>
        </div>
      </div>
    </section>
  );
};

export default Home;
