import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
//import Interest from "./components/Interest/Interest";
//import RadiosForm from "./components/RadiosForm/RadiosForm";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Vynopsis</title>
        <link rel="canonical" href="http://vnopsis.com" />
        <meta name="description" content="Financial markets video updates" />
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
