import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import Hello from "./components/Hello";
import Car from "./components/Car";

const RouteWeb = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/car" element={<Car />} />
        <Route path="*" element={<h1>Không tìm thấy trang web nàys</h1>} />
      </Routes>
    </Router>
  );
};

export default RouteWeb;
