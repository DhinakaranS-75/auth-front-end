import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Home, MealDetails, Error, Category } from "./pages/index";
import Login from "./pages/Login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/meal/:id" element={<MealDetails />} />
      <Route path="/meal/category/:name" element={<Category />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
