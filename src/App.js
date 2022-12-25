import logo from "./logo.svg";
import "./App.css";
import Stock from "./Stock";
import { STOCKS } from "./constants";
import Counter from "./Counter";
import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import ProductsList from "./components/productsList";
import Homework from "./components/homework";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [selectedList, setSelectedList] = useState("");
  return (
    <div className="App">
      <button onClick={() => setSelectedList("productList")}>
        Products List
      </button>
      <button onClick={() => setSelectedList("homework")}>Homework</button>
      {selectedList === "productList" && <ProductsList />}
      {selectedList === "homework" && <Homework />}
      {selectedList === "" && <h1>Please select any list</h1>}
      <ToastContainer />
    </div>
  );
}

export default App;
