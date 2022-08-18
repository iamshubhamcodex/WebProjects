import React, { useContext, useEffect } from "react";
import todoContext from "../context/todoContext";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { useLocation } from "react-router-dom";

const Task = () => {
  const tContext = useContext(todoContext);
  const { ptodo, cat, showT, hSA, setTodoUp } = tContext;
  let location = useLocation();

  useEffect(() => {
    if (showT) {
      hSA(false);
    }
  }, [location]);

  return (
    <>
      <div className="task">
        <p className="head">
          {ptodo.length === 0 && "No "}
          {cat[0].toUpperCase() + cat.slice(1, cat.length)} Task
          {ptodo.length > 1 && "'s"}
          <span
            className="addTask"
            tooltip="Add Todo"
            flow="left"
            onClick={() => {
              hSA(!showT);
              setTodoUp(false);
            }}
          ></span>
        </p>
        <div className="container">
          <AddTask cls={showT ? "inpTask show" : "inpTask"} />
          <div className="uls">
            <ul>
              {ptodo.map((key) => {
                return <TaskList key={key.title} todo={key} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
