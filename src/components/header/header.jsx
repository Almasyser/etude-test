import "./header.css";
import logo from "../../assets/logo color.png";
function Header() {
  return(
    <section className="header-container">
      <img className="logo" src={logo} alt="####" />
      <h1>Header</h1>
      <div className="tel-container">
        06 52 69 52 51
      </div>
    </section>
  )
}
export default Header;