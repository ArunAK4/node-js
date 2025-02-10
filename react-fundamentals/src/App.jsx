import "./css/App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Favorite from "./pages/Favourite.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
