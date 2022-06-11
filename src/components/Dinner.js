import React from "react";
import RecipeCard from "./RecipeCard";
import { Container, Row } from "react-bootstrap";

export default function Dinner({ data }) {
  const dinnerFoods = data.filter((item) => {
    return item.meal === "Dinner" || item.meal === "Lunch or Dinner";
  });
  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {dinnerFoods.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </Row>
    </Container>
  );
}
