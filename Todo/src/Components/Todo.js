import React, { useContext, useEffect } from "react";
import todoContext from "../context/todoContext";
import Alert from "./Alert";
import Sidebar from "./Sidebar";
import Task from "./Task";

const Todo = () => {
  const tContext = useContext(todoContext);
  const { fetchTodo, alert } = tContext;

  useEffect(() => {
    fetchTodo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {alert !== null && <Alert message={alert.msg} type={alert.type} />}
      <header>Your TODO's</header>
      <section>
        <Sidebar />
        <Task />
      </section>
      <footer>--complete all task</footer>
    </>
  );
};

export default Todo;
