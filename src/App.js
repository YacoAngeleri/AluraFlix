import "./App.css";
import "./reset.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Line from "./components/Line";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";




function App() {

  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Line />
      <Main/>

      <Line />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
