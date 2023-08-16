import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import ProductPage from "./Components/Product Page/ProductPage";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path=":id" element={<ProductPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
