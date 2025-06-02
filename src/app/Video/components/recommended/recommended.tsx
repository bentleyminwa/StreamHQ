import { recommendedVideos } from "../../../../lib/data";
import "./recommended.css";

const Recommended = () => {
  return (
    <section className="recommended">
      {recommendedVideos.map((video) => (
        <div className="recommended-video" key={video.videoId}>
          <img
            src={video.thumbnail}
            alt="thumbnail"
            className="recommended-thumbnail"
          />
          <div className="recommended-video-details">
            <img
              src={video.channelImage}
              alt="channel-image"
              className="recommended-channel-image"
            />
            <div className="recommended-video-info">
              <h4>{video.title}</h4>
              <p>{video.channel}</p>
              <p>
                {video.views} • {video.timestamp}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Recommended;
