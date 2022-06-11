import React from "react";
import RecipeCard from "./RecipeCard";
import { Container, Row } from "react-bootstrap";

export default function Lunch({ data }) {
  const lunchFoods = data.filter((item) => {
    return item.meal === "Lunch" || item.meal === "Lunch or Dinner";
  });
  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {lunchFoods.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </Row>
    </Container>
  );
}
