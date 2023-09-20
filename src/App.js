import React from "react";
import { useContext } from "react";
import { ScreenFixed } from "./DataTransfer";
import './App.css'
import From from "./From";
const App = () => {
  const { arr, newObj, show, setShow } = useContext(ScreenFixed);
  return (
    <div style={{display:"flex", flex:"co"}}>
      {newObj.name}
      {newObj.age}
      {newObj.description}
      <From/>
    </div>
  );
};

export default App;