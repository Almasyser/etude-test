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
  const [cardVisible, setCardVisible] = useState(false);
  const array = [
    imgNew,
    imgExist,
    imgFix,
    imgAudit,
    imgMaint
  ]
  const handleClick = (e) =>{
    console.log(e);
    setDot(e);
    setCardVisible(true);
    
  }
  return(
    <>
    <section className="btn-container">
      <button type="radio" onClick={()=> handleClick(1)}>Installation nouvelle</button>
      <button type="radio" onClick={()=> handleClick(2)}>Installation existante</button>
      <button type="radio" onClick={()=> handleClick(3)}>Dépannage</button>
      <button type="radio" onClick={()=> handleClick(4)}>Audit</button>
      <button type="radio" onClick={()=> handleClick(5)}>Maintenance</button>
    </section>
    <section className={cardVisible? "page-container":"page-container-none"}>
      <span className="card">
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
        <button className="btn-card" onClick={()=> setCardVisible(false)}>Fermer</button>
        </>
      }
    </span>
    </section>
    </>
  )
}
export default PageHome;
/*
          <span key={el.subtitle} className="card">
            <img src={array[el.picture]} alt="##" />
            <div className="text-card">
              <h1 className="text-subtitle">{el.subtitle}</h1>
              <p className="text-comments">{el.comments}</p>
              {el.tasks.map((task) => {
                return(
                  <li key={task.data} className="text-tasks">{task.data}</li>
                )
              })}
              </div>

          </span>
          */