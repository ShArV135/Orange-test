import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FAVORITE_PATH, HOME_PATH} from "../api/routes";

export default function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Nav className="ms-auto">
                    <Link to={HOME_PATH} className="nav-link">Search</Link>
                    <Link to={FAVORITE_PATH} className="nav-link">Favorites</Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
