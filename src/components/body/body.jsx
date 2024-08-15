import "./body.css";
import text_french from "../../assets/text_french.json";
import imgNew from "../../assets/pict_new.jpg";
import imgExist from "../../assets/pict_exist.jpg";
import imgFix from "../../assets/pict-fix.jpg";
import imgAudit from "../../assets/pict-audit.jpg";
import imgMaint from "../../assets/pict-maint.jpg";
function PageHome() {
  const array = [
    imgNew,
    imgExist,
    imgFix,
    imgAudit,
    imgMaint
  ]
  const handleClick = (e) =>{
    console.log(e);
    
  }
  return(
    <>
    <section className="btn-container">
      <button type="radio" onClick={()=> handleClick(0)}>Installation nouvelle</button>
      <button type="radio" onClick={()=> handleClick(1)}>Installation existante</button>
      <button type="radio" onClick={()=> handleClick(2)}>Dépannage</button>
      <button type="radio" onClick={()=> handleClick(3)}>Audit</button>
      <button type="radio" onClick={()=> handleClick(4)}>Maintenance</button>
    </section>
    <section className="page-container">
      {text_french.map((el)=>{
        return(
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
        )
      })}

    </section>
    </>
  )
}
export default PageHome;