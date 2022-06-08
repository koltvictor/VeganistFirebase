import React from "react";
import { Card, Col, Container } from "react-bootstrap";

export default function RecipeCard({ recipe }) {
  return (
    <Container>
      <Col>
        <Card
          className="recipeCard"
          style={{
            maxWidth: "100%",
            margin: "1rem",
            padding: "1rem",
            backgroundColor: "transparent",
            border: "1px solid black",
            textAlign: "center",
          }}
        >
          <Card.Body>
            <a href={`/${recipe.id}`} className="recipeLink">
              <Card.Img
                src={recipe.image}
                alt={recipe.title}
                height="250"
                width="300"
                className="recipeLargeImage"
              />
              <Card.Title>
                <br />

                {recipe.name}
              </Card.Title>
            </a>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
}
