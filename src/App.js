import logo from "./logo.svg";
import "./App.css";
import Stock from "./Stock";
import { STOCKS } from "./constants";
import Counter from "./Counter";
import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import ProductsList from "./components/productsList";
function App() {
  return (
    <div className="App">
      <ProductsList />
    </div>
  );
}

export default App;
