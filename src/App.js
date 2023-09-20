import React from "react";
import { useContext } from "react";
import { ScreenFixed } from "./DataTransfer";
import './App.css'
const App = () => {
  const { arr, newObj, show, setShow } = useContext(ScreenFixed);
  return (
    <div>
      {arr}
    </div>
  );
};

export default App;