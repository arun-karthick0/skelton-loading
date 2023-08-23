import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SkeletonTheme baseColor="#313131" highlightColor="#525252">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:userId" element={<Post />} />
          </Routes>
        </SkeletonTheme>
      </BrowserRouter>
    </div>
  );
}

export default App;
