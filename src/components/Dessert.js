import React from "react";
import RecipeCard from "./RecipeCard";
import { Container, Row } from "react-bootstrap";

export default function Dinner({ data }) {
  const dessertFoods = data.filter((item) => {
    return item.meal === "Dessert";
  });
  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {dessertFoods.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </Row>
    </Container>
  );
}
