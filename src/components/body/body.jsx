import "./body.css";
import text_french from "../../assets/text_french.json";
import menu_prestations from "../../assets/menu_prestations.json";
import imgNew from "../../assets/pict_new.jpg";
import imgExist from "../../assets/pict_exist.jpg";
import imgFix from "../../assets/pict-fix.jpg";
import imgAudit from "../../assets/pict-audit.jpg";
import imgMaint from "../../assets/pict-maint.jpg";
import { useState } from "react";
function PageHome() {
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
    <>
    <section className="btn-container">
      {menu_prestations && menu_prestations.map((el,index)=>{
        return(
          <span key={index} className="btn-box">
            <img className="btn-img" src={el.name} alt="##" onClick={()=> handleShow(index+1)}/>
            <p>{el.label}</p>
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
          <p className="text-comments">{text_french[dot].comment}</p>
          {
            text_french[dot].tasks.map((el) =>{
              return(
                <li key={el.data} className="text-tasks">{el.data}</li>
              )
            })
          }
        </div>
        </>
      }
    </span>
    </section>
    </>
  )
}
export default PageHome;
