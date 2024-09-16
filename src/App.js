import './app.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import 'simplebar-react/dist/simplebar.min.css';
import Body from "./components/body/Body";
import SimpleBar from "simplebar-react";
function App() {
  const barStyle = {
    top: 100,
    maxHeight:'100vh'
  }
  return (
    <div className="App">
      <Header />
      <SimpleBar style={barStyle} className="simplebar-scrollbar">
        <Body />
      </SimpleBar>
      <Footer />
    </div>
  );
}

export default App;




// /*  */
/*  */