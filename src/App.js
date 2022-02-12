import "./App.css";
import Header from "./components/Header";
import Home from "./components/Homepage/Home";
import Crypto from "./components/Homepage/Crypto";
import Guida from "./components/Homepage/Guida";
import Newsletter from "./components/Homepage/Newsletter";
import Footer from "./components/Footer";
import Recruitment from "./components/Recruitment";
import Login from "./components/Login";
import Guru from "./components/Homepage/Guru";
import CryptoPage from "./components/Crypto/CryptoPage";
import SingleCrypto from "./components/Crypto/SingleCrypto";

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path={"/cryptos"}>
           <CryptoPage />
          </Route>
          <Route path={"/monete/:id"}>
            <SingleCrypto />
          </Route>
          <Route path={"/login"}>
            <Login />
          </Route>
          <Route path={"/lavora-con-noi"}>
            <Recruitment />
          </Route>
          <Route path={"/guida"}>
            <Guida />
          </Route>
          <Route path={"/"}>
            <Home />
            <Crypto />
            <Guru />
            <Newsletter />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
