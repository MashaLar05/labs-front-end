import "./App.css";
import Header from "./components/Header";
import Features from "./components/Features";
import Design from "./components/Design";
import Quotation from "./components/Quotation";
import AwesomeApps from "./components/AwesomeApps";
import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div id="features">
        <Features />
      </div>
      <div id="design">
        <Design />
      </div>
      <div id="quotations">
        <Quotation />
      </div>
      <div id="apps">
        <AwesomeApps />
      </div>
      <div id="benefits">
        <Benefits />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
