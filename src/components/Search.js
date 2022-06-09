import React from "react";
import { Container } from "react-bootstrap";

export default function Search({ search, setSearch }) {
  return (
    <Container className="searchContainer">
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search by recipe, ingredients, cuisine, or meal type"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search_input"
        />
      </div>
    </Container>
  );
}
