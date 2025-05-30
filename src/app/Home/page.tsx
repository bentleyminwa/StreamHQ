import Feed from "./components/feed/feed";
import Sidebar from "./components/sidebar/sidebar";
import "./page.css";

const Homepage = () => {
  return (
    <main className="home">
      <Sidebar />
      <Feed />
    </main>
  );
};

export default Homepage;
