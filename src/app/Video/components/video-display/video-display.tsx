import "./video-display.css";

const VideoDisplay = () => {
  return (
    <section className="video-display">
      <video controls autoPlay>
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default VideoDisplay;
