import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./component/form/form";
import Show from "./component/show/show";

function App() {
  return (
    <div className="App">
      <Form />
      <Show />
    </div>
  );
}

export default App;
