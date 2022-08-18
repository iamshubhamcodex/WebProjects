import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Todo from "./Components/Todo";
import TodoState from "./context/TodoState";

function App() {
  return (
    <>
      <TodoState>
        <Router>
          <Todo />
        </Router>
      </TodoState>
    </>
  );
}

export default App;
