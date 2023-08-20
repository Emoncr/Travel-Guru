import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import ProductPage from "./Components/Product Page/ProductPage";
import Login from "./Components/Login pages/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route element={<PrivateRoute/>}>
          <Route path="/destination/:categori" element={<ProductPage />} />
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
