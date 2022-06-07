import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function Display({ data }) {
  const showing = data.slice(-3);
  return (
    <Container className="displayCards">
      <h2>Featured Recipes</h2>
      <Row xs={1} md={3} className="g-4">
        <div>
          {showing.map((data) => {
            return (
              <Container>
                <Col>
                  <Card className="displayCard" key={data.id}>
                    <Card.Body>
                      <Card.Title>{data.name}</Card.Title>
                      <Card.Img
                        src={data.image}
                        alt={data.name}
                        className="recipeImage"
                      />
                      <br />
                      <a href={`/${data.id}`}>See the Recipe</a>
                    </Card.Body>
                  </Card>
                </Col>
              </Container>
            );
          })}
        </div>
      </Row>
    </Container>
  );
}
