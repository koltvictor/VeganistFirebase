import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function Display({ data }) {
  const showing = data.slice(-3);
  return (
    <Container className="displayCards">
      <h2>Featured Recipes</h2>
      <hr />
      <Row xs={1} md={3} className="g-4">
        {showing.map((data) => {
          return (
            <Container>
              <Col>
                <Card
                  className="displayCard"
                  key={data.id}
                  style={{
                    border: "1px solid black",
                    boxShadow:
                      "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
                  }}
                >
                  <a href={`/${data.id}`} className="recipeLink">
                    <Card.Body>
                      <Card.Title>{data.name}</Card.Title>
                      <Card.Img
                        src={data.image}
                        alt={data.name}
                        className="recipeImage"
                      />
                      <br />
                    </Card.Body>
                  </a>
                </Card>
              </Col>
            </Container>
          );
        })}
      </Row>
    </Container>
  );
}
