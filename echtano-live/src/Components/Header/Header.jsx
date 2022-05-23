import "./Header.css"

const Header = () => {
    return <div className={"header__container"}>
        <a href="" className={"header__logo"}></a>

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
    <div className={"actions__publicLinks"}>
        <a className={"publicLinks__items"} href=""><img src="" alt="discord"/></a>
        <a className={"publicLinks__items"} href=""><img src="" alt="twitter"/></a>
        <a className={"publicLinks__items"} href=""><img src="" alt="telegram"/></a>
    </div>
    <div className={"actions__buttons"}>
        <a className={"buttons__item"} href="#">Bridge</a>
        <a className={"buttons__item"} href="#">Faucet</a>
    </div>
</div>


    </div>
}
export default Header