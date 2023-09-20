import React from "react";
import { useContext } from "react";
import { ScreenFixed } from "./DataTransfer";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import From from "./components/From";
const App = () => {
  const { arr, newObj, show, setShow } = useContext(ScreenFixed);
  return (
    <div>
      {/* {newObj.name}
      {newObj.age}
      {newObj.description} */}
      <From/>
    </div>
  );
};

export default App;