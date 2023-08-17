import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BookingContext from "./Contexts/BookingContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BookingContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BookingContext>
);
