import React, { useContext, useState } from "react";
import todoContext from "../context/todoContext";

const AddTask = (props) => {
  const tContext = useContext(todoContext);
  const { addTodo, cat } = tContext;
  const [fir, setFir] = useState(false);
  const [sec, setSec] = useState(false);

  let [task, setTask] = useState({
    title: "",
    description: "",
    from: cat,
  });

  const addChng = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
      from: cat,
    });
  };

  const sub = (e) => {
    if (e.which === 13) {
      addTodo(task);
      setTask({ title: "", description: "", from: cat });
    }
  };

  const show = (a, t) => {
    a === 1
      ? t
        ? setFir(true)
        : setFir(false)
      : t
      ? setSec(true)
      : setSec(false);
  };

  return (
    <>
      <div className={props.cls}>
        <p className="adHd">
          Add Task to <span className="adSp">{cat}</span>
        </p>
        <input
          placeholder="Heading of Task"
          maxLength="50"
          name="title"
          className="inpD"
          type="text"
          onChange={addChng}
          onKeyDown={sub}
          value={task.title}
          onFocus={() => {
            show(1, true);
          }}
          onBlur={() => {
            show(1, false);
          }}
        />
        <span className={fir ? "minLen" : "minLen hide"}>
          {3 <= task.title.length
            ? ""
            : 3 - task.title.length + " characters remaining"}
        </span>
        <input
          placeholder="Description of Task"
          maxLength="200"
          name="description"
          className="taskText"
          type="text"
          onChange={addChng}
          onKeyDown={sub}
          value={task.description}
          onFocus={() => {
            show(2, true);
          }}
          onBlur={() => {
            show(2, false);
          }}
        />
        <span className={sec ? "minLen" : "minLen hide"} style={{ top: "50%" }}>
          {10 <= task.description.length
            ? ""
            : 10 - task.description.length + " characters remaining"}
        </span>
      </div>
    </>
  );
};

export default AddTask;
