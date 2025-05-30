import { Menu, Mic, MonitorPlay, Plus, Search, SunDim } from "lucide-react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="flex-row nav-left">
        <Menu />
        <div className="flex-row logo">
          <span>
            <MonitorPlay className="logo-icon" />
          </span>
          <h2>
            Stream<span>HQ</span>
          </h2>
        </div>
      </div>

      <form className="flex-row nav-middle">
        <div>
          <label htmlFor="search">
            <Search className="search-icon" />
          </label>
          <input type="text" placeholder="Search" />
          <span>
            <Search className="search-icon" />
          </span>
        </div>
        <span>
          <Mic className="mic-icon" />
        </span>
      </form>

      <div className="flex-row nav-right">
        <button className="flex-row">
          <span>
            <Plus />
          </span>
          <span>Create</span>
        </button>
        <SunDim />
        <img src="avatar.png" alt="superhero avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
