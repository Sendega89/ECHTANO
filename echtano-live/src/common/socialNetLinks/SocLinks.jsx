import discord from ".././../Assets/images/socialNetImage/discord (1).svg"
import twitter from ".././../Assets/images/socialNetImage/twitter (2).svg"
import telegram from ".././../Assets/images/socialNetImage/telegram (1).svg"
import "./socLinks.css"

const SocLinks = () => {
  return  <div className={"actions__publicLinks"}>
      <a className={"publicLinks__items"} href=""><img src={discord} alt="discord"/></a>
      <a className={"publicLinks__items"} href=""><img src={twitter} alt="twitter"/></a>
      <a className={"publicLinks__items"} href=""><img src={telegram} alt="telegram"/></a>
  </div>
}
export default SocLinks