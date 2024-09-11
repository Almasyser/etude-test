// import home_frame from "../../assets/home_frame.json";
import home_background from "../../assets/home_background.json";
import banner_text from "../../assets/banner_text.json";
import "./banner.css";

function Banner(){
console.log(home_background[0].name);

  return(
  <section className="banner-box">
      <span className="banner-background">
        <img className="img-background" src={home_background[0].name} alt={home_background[0].label} />
        <p className="banner-titre">L'artisan électricien</p>

        <div className="banner-comment">
        {banner_text && banner_text.map((el) =>{
          return(
            <>
              <p className="banner-title">{el.title}</p>
              <p className="banner-text">{el.text}</p>
            </>
            )
          })}
        </div>
      </span>

    </section>
  )
}
export default Banner;
