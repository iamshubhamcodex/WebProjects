import React, { useContext } from "react";
import todoContext from "../context/todoContext";

const Alert = (props) => {
  const tContext = useContext(todoContext);
  let { setIsUndo, isUndo } = tContext;

  const undo = () => {
    setIsUndo((isUndo = true));
    setTimeout(() => {
      setIsUndo(false);
    }, 3500);
  };

  return (
    <>
      <div className="alert">
        {props.message}
        <span
          className="undo"
          onClick={() => {
            undo();
          }}
        >
          Undo
        </span>
      </div>
    </>
  );
};

export default Alert;
