
import "./Logo.css"
import logoImage from "../Assets/images/logoImage.svg";
import logoText from "../Assets/images/Echotano.svg";

const Logo = () => {
    return <div className={"header__logo"}>
        <a href="#" className={"imageContainer"}>
            <img className="logoImage" src={logoImage} alt="logoImage"/>
            <img  className="logoText" src={logoText} alt="logoText"/>
        </a>
</div>
}
export default Logo