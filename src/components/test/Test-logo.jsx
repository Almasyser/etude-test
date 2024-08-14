
import "./test.css";
function Test(){
  const imageList = [
    {name: "/logos/logo_home.png", dot: null},
    {name: "/logos/logo_danger.png", dot: null},
    {name: "/logos/logo color.png", dot: null},
    {name: "/logos/logo_home_blue.png", dot: null},
    {name: "/logos/logo_home_orange.png", dot: 1},
    {name: "/logos/logo_light_black.png", dot: null},
    {name: "/logos/logo_light_blue.png", dot: null},
    {name: "/logos/logo_light_orange.png", dot: 1},
    {name: "/logos/logo_light_white.png", dot: null},
    {name: "/logos/logo_metrix_blue.png", dot: null},
    {name: "/logos/logo_metrix_orange.png", dot: 1},
    {name: "/logos/logo_metrix_white.png", dot: null}
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