import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Routes from "./config/Routes.jsx";
import Footer from "./components/footer/Footer.jsx";
//import "./App.scss";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Routes />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
