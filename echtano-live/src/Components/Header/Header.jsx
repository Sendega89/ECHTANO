import "./Header.css"
import Logo from "../../common/Logo";
import SocLinks from "../../common/socialNetLinks/SocLinks";
import {Nav, Navbar} from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    return <div className={"header__container"}>
        <Navbar collapseOnSelect expand="lg"  variant="dark">
            <Navbar.Brand href="#home">
                <Logo className="d-inline-block align-top"/>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className={"header__menu"}>
                <Nav className="mr-auto menu__list">
                    <Nav.Link className={"menu__item"} href="#features">About Us</Nav.Link>
                    <Nav.Link className={"menu__item"} href="#howItWorks">How it Works</Nav.Link>
                    <Nav.Link className={"menu__item"} href="#tokenomics">Tokenomics</Nav.Link>
                    <Nav.Link className={"menu__item"} href="#FAQ">FAQ</Nav.Link>
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
export default Header

{/*<Logo />
        <nav className={"header__menu"}>
            <ul className={"menu__list"}>
                <li className={"menu__item"}>
                    <a href="#" className={"menu__link"}>About Us</a>
                </li>
                <li className={"menu__item"}>
                    <a href="#" className={"menu__link"}>How it Works</a>
                </li>
                <li className={"menu__item"}>
                    <a href="#" className={"menu__link"}>Tokenomics </a>
                </li>
                <li className={"menu__item"}>
                    <a href="#" className={"menu__link"}>FAQ</a>
                </li>
            </ul>
        </nav>
        <div className={"header__actions"}>
   <div>
       <SocLinks />
   </div>
    <div className={"actions__buttons"}>
        <a className={"buttons__item"} href="#">Bridge</a>
        <a className={"buttons__item"} href="#">Faucet</a>
    </div>
</div>*/}