// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./css/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // Disabling this because it double renders with makes the local storage fav removed
  // and the movie context is also returning empty array
  // <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </StrictMode>
);
