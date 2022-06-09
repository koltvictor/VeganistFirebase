import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

export default function RecipeDetail() {
  const [recipeShowing, setRecipeShowing] = useState([]);

  const id = useParams().id;

  useEffect(() => {
    fetch(`https://veganist-db.herokuapp.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipeShowing(data));
  }, [id]);

  return (
    <Container>
      <h3>Recipe Details</h3>
      <a href="/recipes">Back to recipes</a>
      <br />
      <br />
      <Card style={{ width: "50%" }}>
        <Card.Body>
          <Card.Img
            className="recipeImage"
            src={recipeShowing.image}
            alt={recipeShowing.name}
            height="500"
          />
          <h3>{recipeShowing.name}</h3>
          <p>
            Ingredients:
            <br />
            {recipeShowing.ingredients}
          </p>
          <p>
            Directions:
            <br />
            {recipeShowing.instructions}
          </p>
          <p>Cuisine: {recipeShowing.cuisine}</p>
          <p>Course(s): {recipeShowing.meal}</p>
          <a href="/recipes">Back to recipes</a>
          <br />
        </Card.Body>
      </Card>
    </Container>
  );
}
