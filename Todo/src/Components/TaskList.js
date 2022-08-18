import React, { useContext, useState } from "react";
import "../CSS/TaskList.css";
import todoContext from "../context/todoContext";

const TaskList = (props) => {
  const tContext = useContext(todoContext);
  const { delTodo, cat, setTodoUp, hSA, updateTodo } = tContext;
  const { title, description, done, _id } = props.todo;
  let [check, setCheck] = useState(done === "yes");

  const donee = () => {
    updateTodo({ ...props.todo, done: check ? "no" : "yes" });
  };

  return (
    <>
      <div className={check ? "li checked" : "li"}>
        <input
          className="checkB"
          defaultChecked={check}
          type="checkbox"
          id={title}
        />
        <label
          className="checkL"
          htmlFor={title}
          onClick={() => {
            setCheck(!check);
            setTimeout(() => {
              cat === "daily" || cat === "weekly" ? donee() : delTodo(_id);
            }, 500);
          }}
        >
          <li className="tItem">
            <div className="ta-de">
              <p className="t_head">
                {cat === "daily" || cat === "weekly"
                  ? title.slice(-title.length + 1, -cat.length)
                  : title.slice(-title.length, -cat.length)}
              </p>
              <p className="t_desc">{description}</p>
            </div>
          </li>
        </label>
        <div className="icon">
          <i
            className="fa fa-minus-square-o"
            aria-hidden="true"
            tooltip="Delete"
            flow="up"
            onClick={() => {
              delTodo(_id);
            }}
          ></i>
          <i
            className="fa fa-pencil-square-u"
            tooltip="Edit"
            flow="up"
            onClick={() => {
              hSA(true);
              setTodoUp(props.todo);
            }}
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </>
  );
};

export default TaskList;
