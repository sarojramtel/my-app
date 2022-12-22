import logo from "./logo.svg";
import "./App.css";
import Stock from "./Stock";
import { STOCKS } from "./constants";
import Counter from "./Counter";
import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import ProductsList from "./components/productsList";
import Homework from "./components/homework";
function App() {
  return (
    <div className="App">
      <ProductsList />
      {/* <Homework /> */}
    </div>
  );
}

export default App;
