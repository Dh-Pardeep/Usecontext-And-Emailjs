import { useState } from "react";
import { createContext } from "react";

export const ScreenFixed = createContext();

export default function ScreenFixedProvider({ children }) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const [show, setShow] = useState(true);
  const newObj = {
    name: "Pardeep",
    age: 27,
    description: "this is for testing"
  };
  const value = { arr, show, newObj, setShow, };
  return <ScreenFixed.Provider value={value}>{children}</ScreenFixed.Provider>;
}  