import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Container } from "react-bootstrap";

export default function RecipeCard({ recipe }) {
  return (
    <Container>
      <Col>
        <Card
          style={{
            maxWidth: "100%",
            margin: "1rem",
            padding: "1rem",
            backgroundColor: "lightgreen",
            textAlign: "center",
          }}
        >
          <Card.Body>
            <Card.Img
              src={recipe.image}
              //   className="recipeImage"
              alt={recipe.title}
              height="250"
              width="300"
            />
            <Card.Title>{recipe.name}</Card.Title>
          </Card.Body>
          <Link to={`/${recipe.id}`}>See the Recipe</Link>
        </Card>
      </Col>
    </Container>
  );
}
