import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="transparent"
        variant="light"
        className="navBar"
      >
        <Container>
          <Navbar.Brand href="/" className="navBrand">
            TheVeganist
            <img
              src="https://i.imgur.com/BJyNCt8.jpg"
              className="logo"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/recipes">Recipe Index</Nav.Link>
              <Nav.Link href="/pantry">Vegan Pantry</Nav.Link>
              <NavDropdown title="Courses" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/breakfast">Breakfast</NavDropdown.Item>{" "}
                <NavDropdown.Divider />
                <NavDropdown.Item href="/lunch">Lunch</NavDropdown.Item>{" "}
                <NavDropdown.Divider />
                <NavDropdown.Item href="/dinner">Dinner</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/dessert">Dessert</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
