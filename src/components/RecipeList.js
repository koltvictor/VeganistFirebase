import React from "react";
import Search from "./Search";
import RecipeCard from "./RecipeCard";
import { Container, Row } from "react-bootstrap";

export default function RecipeList({ search, setSearch, filteredRecipes }) {
  return (
    <Container>
      <br />
      <Search search={search} setSearch={setSearch} />
      <br />
      <Row xs={1} md={3} className="g-4">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </Row>
    </Container>
  );
}
