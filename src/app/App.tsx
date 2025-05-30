import { Route, Routes } from "react-router";
import Navbar from "../shared/components/navbar/navbar";
import Homepage from "./Home/page";
import Videopage from "./Video/page";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/video/:categoryId/:videoId" element={<Videopage />} />
      </Routes>
    </>
  );
};

export default App;
