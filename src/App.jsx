import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";

import Home from "./Pages/Home/Home";
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
          <Route path="/*" element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
