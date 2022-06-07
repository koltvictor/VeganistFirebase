import React from "react";
import { Container } from "react-bootstrap";
import Display from "./Display";

export default function Home({ data }) {
  return (
    <div>
      <Container className="homeContainer">
        <h2>A Collection of Vegan Recipes Made Easy</h2>
        <p>
          New to vegan cooking or just looking for some inspiration? Feel free
          to peruse and search the Recipes Index, see dishes by course, or add a
          recipe of your own! We're all about sharing delicious plant-based
          recipes.
        </p>
        <Display data={data} />
      </Container>
    </div>
  );
}
