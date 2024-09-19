// import home_frame from "../../assets/home_frame.json";
import home_background from "../../assets/home_background.json";
import "./banner.css";

function Banner(){
console.log(home_background[0].name);

  return(
  <section className="banner-box">
      <span className="banner-background">
        <img className="img-background" src={home_background[0].name} alt={home_background[0].label} />
      </span>
       
      <span className="banner-texte">
        <p className="introduction">&nbsp;Fort d'une expérience de 42 ans dans le domaine de l'électricité, je vous propose des services complets pour tous vos projets électriques. Que ce soit pour une installation neuve, une rénovation, ou encore un dépannage en urgence, je met mon savoir-faire à votre service pour vous garantir des prestations de qualité.</p>
        <div className="services-box">
          <p className="soustitre">Mes services</p>
          <ul className="services-ul">
            <li><strong>Installation électrique : </strong>Réalisation de l'installation complète de vos systèmes électriques, du tableau électrique aux prises et interrupteurs.</li>
            <li><strong>Mise aux normes : </strong>Remise en conformité de vos installations selon les normes en vigueur pour assurer votre sécurité.</li>
            <li><strong>Dépannage : </strong>Intervention rapide pour résoudre tous types de pannes électriques, qu'il s'agisse de court-circuit, de panne de courant ou de disjoncteur défaillant.</li>
            <li><strong>Maintenance et entretien </strong>: Suivi régulier de vos installations pour prévenir tout dysfonctionnement.</li>
            <li><strong>Domotique : </strong>Installation de systèmes domotiques pour automatiser votre maison (éclairage, chauffage, sécurité).</li>
            <li><strong>Rénovation électrique : </strong>Refonte de l’installation électrique lors de travaux de rénovation.</li>
          </ul>
        </div>
        <div className="services-box">
          <p className="soustitre">Mes garanties</p>
          <ul className="services-ul">
            <li><strong>Expertise : </strong>Je suis électricien diplômé et formé aux dernières technologies et normes électriques.</li>
            <li><strong>Réactivité : </strong>J'interviens rapidement pour toute urgence ou besoin spécifique.</li>
            <li><strong>Proximité : </strong>Basé à Villeneuve Tolosane, j'interviens principalement sur un rayon d'environ 50km et met un point d'honneur à offrir un service de proximité.</li>
            <li><strong>Garantie et sécurité : </strong>Mes travaux sont couverts par une garantie décennale, vous assurant une tranquillité d’esprit pour longtemps.</li>
          </ul>
        </div>
        <p className="introduction">Je suis à votre écoute pour toute demande de devis ou d'informations supplémentaires. N'hésitez pas à me contacter pour discuter de votre projet ou programmer une intervention.</p>
       </span>
       
      

    </section>
  )
}
export default Banner;
