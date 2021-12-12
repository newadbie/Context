import React from "react";
import "./App.css";
import ChangeContext from "./ChangeContext";
import TestComponent from "./TestComponent";

function App() {
  const message = undefined;
  return (
    <div className="App">
      <TestComponent message="Render 1">
        <TestComponent message="Render 2">
          <TestComponent message="Render 3">
            <ChangeContext message={message as any} />
          </TestComponent>
        </TestComponent>
      </TestComponent>
    </div>
  );
}

export default App;
