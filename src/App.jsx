import Intro from "./components/intro/intro"
import About from "./components/intro/about/About"
import ProductList from "./components/productList/ProductList";
import Product from "./components/product/Product";
import Contact from "./components/contact/Contact"
import Toggle from "./components/toggle/Toggle"
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "./context";


const App = () => {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return <div style={{backgroundColor:darkMode ? "#222" : "white", color: darkMode &&'white'}}>
    <Toggle />
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
  </div>;
};

export default App;