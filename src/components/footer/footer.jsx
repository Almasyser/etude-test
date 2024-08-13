
import { LuFacebook } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

import "./footer.css";

function Footer() {
  
  return(
    <section className="footer-container">
      <div className="icons-container">
        <a href="https://www.facebook.com/"  target="_blank" rel="noopener noreferrer"><LuFacebook  /></a>
        <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><FaWhatsapp  /></a>
        <a href="https://fr.linkedin.com/" target="_blank" rel="noopener noreferrer"><FiLinkedin  /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FiMail  /></a>
      </div>
    </section>
  )
}
export default Footer;