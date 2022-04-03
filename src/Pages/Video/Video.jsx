import React from "react";
import { useParams } from "react-router-dom";

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
      <img className="video__image" src={video.url} alt={video.title} width={1360} height={700} />

      <h2 className="video__heading">{video.title}</h2>

      <div className="video__info">
        <span className="video__info__count">123k views</span>

        <div className="video__info__inner">
          
        </div>
      </div>
    </section>
  );
};

export default Video;
