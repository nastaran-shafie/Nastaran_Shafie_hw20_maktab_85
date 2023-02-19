import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./component/form/form";
import Show from "./component/show/show";
import { useSelector } from "react-redux";

function App() {
  const login = useSelector((state: boolean | any) => state.form.login);
  return <div className="App">{!login ? <Form /> : <Show />}</div>;
}

export default App;
