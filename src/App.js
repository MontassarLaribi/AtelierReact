import React from "react";
import "./App.css";
import Hello from "./helloComponent";
import HelloPerson from "./helloPerson";

function App() {
  let person = {
    name: "Montassar",
    lastName: "Laribi",
  };
  return (
    <div className="App">
      <header className="App-header">
        <Hello name="Montassar" />
        <HelloPerson person={person} />
      </header>
    </div>
  );
}

export default App;
