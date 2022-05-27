import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import Logo from "../Logo";
import "bootstrap/dist/css/bootstrap.min.css";
import SocLinks from "../socialNetLinks/SocLinks";

function BurgerMenu() {
    return <div className="burger">
        <Navbar collapseOnSelect expand="lg"  variant="dark">
            <Navbar.Brand href="#home">
                <Logo className="d-inline-block align-top"/>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className={"menu__link"} href="#features">About Us</Nav.Link>
                    <Nav.Link className={"menu__link"} href="#howItWorks">How it Works</Nav.Link>
                    <Nav.Link className={"menu__link"} href="#tokenomics">Tokenomics</Nav.Link>
                    <Nav.Link className={"menu__link"} href="#FAQ">FAQ</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <div>
                <SocLinks />
            </div>
            <div className={"actions__buttons"}>
                <a className={"buttons__item"} href="#">Bridge</a>
                <a className={"buttons__item"} href="#">Faucet</a>
            </div>
        </Navbar>
    </div>
}

export default BurgerMenu;