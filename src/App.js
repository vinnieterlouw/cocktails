import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import CategoryPage from "./Pages/CategoryPage";
import CocktailImage from "./Pages/CocktailImage";

function App() {
  return (
    <div className="App">
      <h1>Cocktail list</h1>
      <div>
        <NavLink end to="/">
          Home
        </NavLink>
      </div>
      <Routes className="cockStyle">
        <Route path="/" element={<CategoryPage />} />
        <Route path="/:image" element={<CocktailImage />} />
      </Routes>
    </div>
  );
}

export default App;
