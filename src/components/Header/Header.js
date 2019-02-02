import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const Header = () => {
    return (
        <Navbar dark className="navberBlock" light expand="md">
            <Container>
                <NavbarBrand href="/">Quotes Central</NavbarBrand>
                <NavbarToggler />
                <Collapse isOpen navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={RouterNavLink} to={"/"} exact>Quotes</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RouterNavLink} to={"/add"}>Submit new quote</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;