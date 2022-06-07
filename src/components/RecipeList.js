import React from "react";
import Search from "./Search";
import RecipeCard from "./RecipeCard";
import { Container, Row } from "react-bootstrap";

export default function RecipeList({
  data,
  search,
  setSearch,
  filteredRecipes,
}) {
  return (
    <Container>
      <Search search={search} setSearch={setSearch} />
      <Row xs={1} md={3} className="g-4">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </Row>
    </Container>
  );
}
