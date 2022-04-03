import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";

import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import Channel from "./Pages/Channel/Channel";
import Error from "./Pages/Error/Error";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/channel/:channelId" element={<Channel />} />
          <Route path="/video/:videoId" element={<Video />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
