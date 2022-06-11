import React from "react";

export default function Breakfast({ data }) {
  const breakfastFoods = data.filter((item) => {
    return item.meal === "Breakfast";
  });
  return (
    <div>
      {breakfastFoods.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
