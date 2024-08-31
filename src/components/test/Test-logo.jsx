
import "./test.css";
function Test(){
  const imageList = [
    {name: "/logos/logo_danger.png", dot: null},
    {name: "/logos/logo_home_blue.png", dot: null},
    {name: "/logos/logo_home_batir.png", dot: null},
    {name: "/logos/logo_light_blue.png", dot: null},
    {name: "/logos/logo_metrix_blue.png", dot: null},
  ];
 
  return(
    <section className="test-container">
      <h1>TEST</h1>
      <div className="test-box">
        {imageList && imageList.map((el, index) => (
          <div className="image">
            <img className={ el.dot? "fond-blue":"fond-neutre"} key={index} src={el.name} alt="###" />
            <p>{el.name.slice(7)}</p>
          </div>
        ))}
      </div>
    </section>
  )
      
}
export default Test;