import React from "react";
import { useParams } from "react-router-dom";

import Like from "../../Components/Lib/Icons/Like";
import Dislike from "../../Components/Lib/Icons/Dislike";
import Share from "../../Components/Lib/Icons/Share";
import More from "../../Components/Lib/Icons/More";

import "./Video.scss";

const Video = () => {
  const { videoId } = useParams();

  const [video, setVideo] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos?id=" + videoId);

      const data = await response.json();

      if (data) {
        setVideo(data[0]);
      }
    })();
  }, []);

  console.log();

  return (
    <section className="video">
      <div className="video__left">
        <img className="video__image" src={video.url} alt={video.title} width={1360} height={700} />

        <h2 className="video__heading">{video.title}</h2>

        <div className="video__info">
          <span className="video__info__count">123k views</span>

          <div className="video__info__inner">
            <ul className="video__info__list">
              <li className="video__info__item">
                <button className="video__info__button">
                  <Like />
                  <span className="video__info__text">123k</span>
                </button>
              </li>
              <li className="video__info__item">
                <button className="video__info__button">
                  <Dislike />
                  <span className="video__info__text">456k</span>
                </button>
              </li>
              <li className="video__info__item">
                <button className="video__info__button">
                  <Share />
                  <span className="video__info__text">Share</span>
                </button>
              </li>
            </ul>

            <button className="video__inner__button" name="more">
              <More />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
