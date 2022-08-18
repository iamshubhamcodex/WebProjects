import React, { useContext, useEffect } from "react";
import todoContext from "../context/todoContext";
import { useNavigate } from "react-router-dom";

const CatList = (props) => {
  const tContext = useContext(todoContext);
  let { setTask, delCat, hSA, setShowC, setCatUp } = tContext;
  let history = useNavigate(),
    { name, cat, id, cate } = props;

  useEffect(() => {
    history("/General");
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <li className={cat}>
        <p
          className="cat_item_g"
          onClick={(e) => {
            setTask(name.toLowerCase());
            history("/" + name[0].toUpperCase() + name.slice(1));
            setShowC(false);
            setCatUp(false);
            hSA(false);
          }}
        >
          {name[0].toUpperCase() + name.slice(1, name.length)}
        </p>
        {cat === "item" && (
          <span className="icon">
            <i
              className="fa fa-trash-o"
              tooltip="Delete"
              flow="up"
              onClick={() => {
                history("/General");
                delCat({ name: name, id: id });
              }}
              aria-hidden="true"
            ></i>
            <i
              className="fa fa-pencil-square-o"
              tooltip="Rename"
              flow="up"
              onClick={(e) => {
                setShowC(true);
                setCatUp(cate);
              }}
              aria-hidden="true"
            ></i>
          </span>
        )}
      </li>
    </>
  );
};

export default CatList;
