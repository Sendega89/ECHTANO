import  "./Footer.css"
import Logo from "../../common/Logo";
import SocLinks from "../../common/socialNetLinks/SocLinks";

const Footer = ()=> {
    return <div className={"footer__container"}>
        <Logo />
        <SocLinks/>
        <div className="legalInformation">
            <p>© Echotano 2022. All Rights Reserved</p>
        </div>
    </div>
}
export default Footer