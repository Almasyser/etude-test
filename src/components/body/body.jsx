import "./body.css";
import text_french from "../../assets/text_french.json";
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
    handleHide();
    setDot(e);
    setVisible(true);
  }
  const handleHide =()=>{
    setVisible(false);
  }
  return(
    <>
    <section className="btn-container">
      <button type="radio" onClick={()=> handleShow(1)}>Installation nouvelle</button>
      <button type="radio" onClick={()=> handleShow(2)}>Installation existante</button>
      <button type="radio" onClick={()=> handleShow(3)}>Dépannage</button>
      <button type="radio" onClick={()=> handleShow(4)}>Audit</button>
      <button type="radio" onClick={()=> handleShow(5)}>Maintenance</button>
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
