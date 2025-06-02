import Recommended from "./components/recommended/recommended";
import VideoDisplay from "./components/video-display/video-display";
import "./page.css";

const Videopage = () => {
  return (
    <main className="video-page">
      <VideoDisplay />
      <Recommended />
    </main>
  );
};

export default Videopage;
