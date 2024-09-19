import Entete from "../entete/Entete";
import Banner from "../Banner/banner";
import Carrousel from "../carrousel/Carrousel";
import "./body.css";

function Body () {
  return(
    <section className="body-box">
      <Entete />
      <Banner />
      <Carrousel />
    </section>
  )
}
export default Body;