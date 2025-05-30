import { EllipsisVertical } from "lucide-react";
import { feedCategories, feedVideos } from "../../../../lib/data";
import "./feed.css";

const Feed = () => {
  return (
    <section className="feed">
      {/* categories */}
      <ul className="flex-row feed-categories">
        {feedCategories.map(({ categoryId, label }) => (
          <li key={categoryId} className="category">
            {label}
          </li>
        ))}
      </ul>

      {/* videos */}
      <div className="feed-videos">
        {feedVideos.map((video) => (
          <div key={video.videoId} className="video-container">
            <img src={video.thumbnail} alt="" className="thumbnail" />
            <div className="video-details">
              <img src={video.channelImage} alt="" />
              <div>
                <h3>{video.title}</h3>
                <h4>{video.channel}</h4>
                <p>
                  {video.views} views • {video.timestamp}
                </p>
              </div>
              <span>
                <EllipsisVertical />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feed;
