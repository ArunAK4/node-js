import "./css/App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Favorite from "./pages/Favourite.jsx";
import NavBar from "./components/NavBar.jsx";
import { MovieProvider } from "./context/MovieContext.jsx";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
