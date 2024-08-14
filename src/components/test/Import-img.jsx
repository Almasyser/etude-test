
function ImportImg(props){
  const { setImageList } = props;
  const [list] = [
    "/logos/logo color.png",
    "/logos/logo_gris_circle.png",
    "/logos/logo_gris-hot",
    "/logos/logo_gris_oeil.png",
    "/logos/logo_10.png",
    "/logos/logo_danger.png",
    "/logos/logo_home.png",
    "/logos/logo_home_metrix.png",
    "/logos/logo_home_blue.png",
    "/logos/logo_home_orange.png",
    "/logos/logo_light_black.png",
    "/logos/logo_light_blue.png",
    "/logos/logo_light_orange.png",
    "/logos/logo_light_white.png",
    "/logos/logo_metrix_light.png",
    "/logos/logo_metrix_blue.png",
    "/logos/logo_metrix_orange.png",
    "/logos/logo_metrix_white.png",
  ];
  console.log(list)
  setImageList(list);

}
export default ImportImg;