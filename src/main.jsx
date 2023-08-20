import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BookingContext from "./Contexts/BookingContext.jsx";
import UserContext from './Contexts/UserContext.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContext>
    <BookingContext>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BookingContext>
</UserContext>
);
