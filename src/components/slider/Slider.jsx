
// import { useState } from 'react';
import text_french from "../../assets/text_french.json";
import imgNew from "../../assets/pict_new.jpg";
import imgExist from "../../assets/pict_exist.jpg";
import imgFix from "../../assets/pict-fix.jpg";
import imgAudit from "../../assets/pict-audit.jpg";
import imgMaint from "../../assets/pict-maint.jpg";
import "./slider.css";
const ImageSlider = () => {
  const array = [
    imgNew,
    imgExist,
    imgFix,
    imgAudit,
    imgMaint
  ]


return(
  <>
    {text_french && text_french.map((el)=>{
      return(
        <section className='card'>
          <img src={array[el.picture]} alt="##" />
          <div className="text-card">
            <h1 className="text-subtitle">{el.subtitle}</h1>
            <p className="text-comments">{el.comment}</p>
            {
              el.tasks.map((item) =>{
                return(
                  <li key={item.data} className={item.puce? "text-tasks-puce":"text-tasks"}>{item.data}</li>
                )
              })
            }
          </div>
        </section>
      )
    })}
  </>
);
}
export default ImageSlider;