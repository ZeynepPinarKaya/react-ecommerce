import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="list" element={<ProductList />} />
    <Route path="detail" element={<Product />} />
    </Routes>;
};

export default App;