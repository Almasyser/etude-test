import './app.css';
import Body from './components/body/body';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Test from './components/test/Test-logo';
// import Slider from './components/slider/Slider';
function App() {
  return (
    <div className="App">
      <Header />
      <Test />
      {/* <Slider /> */}
      <Body />
      <Footer />
    </div>
  );
}

export default App;
