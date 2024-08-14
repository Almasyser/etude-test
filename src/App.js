import './app.css';
import Body from './components/body/body';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Test from './components/test/Test-logo'; 
function App() {
  return (
    <div className="App">
      <Header />
      <Test />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
