import Detail from "./pages/Detail";
import Home from "./pages/Home";
import List from "./pages/List";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="list" element={<List />} />
    <Route path="detail/:id" element={<Detail />} />
    </Routes>;
};

export default App;