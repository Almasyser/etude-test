import "./body.css";
import 'simplebar-react/dist/simplebar.min.css';
import Banner from "../Banner/banner";
import Carrousel from "../carrousel/Carrousel";
import SimpleBar from "simplebar-react";

function PageHome() {
  const barStyle = {
    maxHeight:'100vh',
      
  }
  return(
    <SimpleBar style={barStyle} className="simplebar-scrollbar">
      <Banner />
      <Carrousel />
    </SimpleBar>
  )
}
export default PageHome;
