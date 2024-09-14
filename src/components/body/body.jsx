import "./body.css";
import 'simplebar-react/dist/simplebar.min.css';
import text_french from "../../assets/text_french.json";
import menu_prestations from "../../assets/menu_prestations.json";
import Banner from "../Banner/banner";
import imgNew from "../../assets/pict_new.jpg";
import imgExist from "../../assets/pict_exist.jpg";
import imgFix from "../../assets/pict-fix.jpg";
import imgAudit from "../../assets/pict-audit.jpg";
import imgMaint from "../../assets/pict-maint.jpg";
import { useState } from "react";
import SimpleBar from "simplebar-react";

function PageHome() {
  const barStyle = {
    maxHeight:'100vh',
      
  }
  const [dot,setDot] = useState(null);
  const [visible, setVisible] = useState(false);
  const array = [
    imgNew,
    imgExist,
    imgFix,
    imgAudit,
    imgMaint
  ]
  const handleShow = (e) =>{
    setDot(e);
    setVisible(true);
  }
  const handleHide =()=>{
    setVisible(false);
  }
  return(
    <SimpleBar style={barStyle} className="simplebar-scrollbar">
    <Banner />
    <section className="btn-container">
      {menu_prestations && menu_prestations.map((el,index)=>{
        return(
          <span key={index} className="btn-box">
            <img className="btn-img" id="btnImg" src={el.name} alt="##" onClick={()=> handleShow(index+1)}/>
            <p htmlFor="btnImg" className="btn-label">{el.label}</p>
          </span>
        )
      }
    )}

    </section>
    <section className="page-container">
      <span className={visible? "card":"noCard"} onClick={handleHide}>
      {dot && 
      <>
        <img src={array[text_french[dot].picture]} alt="##" />
        <div className="text-card">
          <h1 className="text-subtitle">{text_french[dot].subtitle}</h1>
          <p className="text-comments">{text_french[dot].comments}</p>
          {
            text_french[dot].tasks.map((el) =>{
              return(
                <li key={el.data} className={el.puce? "text-tasks-puce":"text-tasks"}>{el.data}</li>
              )
            })
          }
        </div>
        </>
      }
    </span>
    </section>
    </SimpleBar>
  )
}
export default PageHome;
