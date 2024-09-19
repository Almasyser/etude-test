import "./entete.css";
import home_background from "../../assets/home_background.json";
function Entete(){
  return(
    <>
    <span className="entete-container">
      <img className="img-entete" src={home_background[1].name} alt={home_background[1].label} />
      <p className="banner-titre">L'artisan électricien</p>
    </span>
    </>
  )
}
export default Entete;