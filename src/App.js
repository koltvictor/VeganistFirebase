import { useQuery } from "react-query";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import Pantry from "./components/Pantry";
import Breakfast from "./components/Breakfast";
import Lunch from "./components/Lunch";
import Dinner from "./components/Dinner";
import Dessert from "./components/Dessert";

function App() {
  const [search, setSearch] = useState("");
  const fetchRecipes = async () => {
    const response = await fetch("https://veganist-db.herokuapp.com/recipes");
    return response.json();
  };

  const { data, status } = useQuery("recipes", fetchRecipes);

  if (status === "loading") {
    return <div>Hold tight! Good stuff is loading ...</div>;
  }

  if (status === "error") {
    return <div>Error!</div>;
  }

  const filteredRecipes = data.filter(
    (recipe) =>
      (recipe.name || "").toLowerCase().includes(search.toLowerCase()) ||
      (recipe.ingredients || "").toLowerCase().includes(search.toLowerCase()) ||
      (recipe.cuisine || "").toLowerCase().includes(search.toLowerCase()) ||
      (recipe.meal || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route
          path="/recipes"
          element={
            <RecipeList
              filteredRecipes={filteredRecipes}
              search={search}
              setSearch={setSearch}
            />
          }
        />
        <Route exact path="/:id" element={<RecipeDetail />} />
        <Route path="/pantry" element={<Pantry />} />
        <Route path="/breakfast" element={<Breakfast data={data} />} />
        <Route path="/lunch" element={<Lunch data={data} />} />
        <Route path="/dinner" element={<Dinner data={data} />} />
        <Route path="/dessert" element={<Dessert data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
