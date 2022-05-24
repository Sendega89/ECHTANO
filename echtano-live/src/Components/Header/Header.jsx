import "./Header.css"
import Logo from "../../common/Logo";
import SocLinks from "../../common/socialNetLinks/SocLinks";


const Header = () => {
    return <div className={"header__container"}>
        <Logo />
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
</div>
    </div>
}
export default Header