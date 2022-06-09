import React from "react";

export default function Cuisine({ filteredRecipes }) {
  const mexican = filteredRecipes.filter((cuisine) => {
    return cuisine.cuisine === "Mexican";
  });

  const japanese = filteredRecipes.filter((cuisine) => {
    return cuisine.cuisine === "Japanese";
  });

  return (
    <div>
      {mexican.map((dish) => (
        <li>{dish.name}</li>
      ))}
    </div>
  );
}
