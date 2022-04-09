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
import Admin from "./components/admin/Admin";
import AdminHome from "./components/admin/AdminHome";
import Sidebar from "./components/admin/Sidebar";
import CryptoAdd from "./components/admin/CryptoAdd";
import ScrollToTop from "./components/ScrollToTop";
import AdminMessages from "./components/admin/AdminMessages"
import AdminSingleMessage from "./components/admin/AdminSingleMessage";
import GuruLogin from "./components/Guru/GuruLogin";
import GuruChat from "./components/Guru/GuruChat";

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
      <ScrollToTop />
        <Switch>
          <Route path={"/cryptos"}>
            <Header />
            <CryptoPage />
            <Footer />
          </Route>
          <Route path={"/monete/:id"}>
            <Header />
            <SingleCrypto />
            <Footer />
          </Route>
          <Route path={"/login"}>
            <Header />
            <Login />
            <Footer />
          </Route>
          <Route path={"/lavora-con-noi"}>
            <Header />
            <Recruitment />
            <Footer />
          </Route>
          <Route path={"/guida"}>
            <Header />
            <Guida />
            <Footer />
          </Route>
          <Route path={"/guru-login"}>
            <Header />
            <GuruLogin />
          </Route>
          <Route path={"/guru-chat"}>
            <Header />
            <GuruChat />
          </Route>
          <Route path={"/admin"}>
            <Admin />
          </Route>
          <Route path={"/admin-home"}>
            <Sidebar />
            <AdminHome />
          </Route>
          <Route path={"/admin-messages"}>
            <Sidebar />
            <AdminMessages />
          </Route>
          <Route path={"/admin-message/:id"}>
            <Sidebar />
            <AdminSingleMessage />
          </Route>
          <Route path={"/cryptos-add"}>
            <Sidebar />
            <CryptoAdd />
          </Route>
          <Route path={"/"}>
            <Header />
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
