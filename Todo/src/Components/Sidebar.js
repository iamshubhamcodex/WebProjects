import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import todoContext from "../context/todoContext";
import "../CSS/Sidebar.css";
import Category from "./Category";
import CatList from "./CatList";

const Sidebar = () => {
  const tContext = useContext(todoContext);
  let history = useNavigate();
  let { todo, fetchCat, addCat, showC, setShowC, setCatUp } = tContext,
    [nam, setNam] = useState("");

  useEffect(() => {
    fetchCat();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="sidebar">
        <p className="head">
          Categories
          <i
            className="fa fa-plus-circle adc"
            name="addC"
            tooltip="Add Category"
            flow="right"
            aria-hidden="true"
            onClick={() => {
              setShowC((showC = !showC));
              setCatUp(false);
            }}
          ></i>
        </p>
        <ul>
          <li className={showC ? "inp show" : "inp"}>
            <input
              maxLength="12"
              name="catinp"
              onKeyDown={(e) => {
                if (e.which === 13) {
                  addCat(nam);
                  history(nam);
                  setNam("");
                }
              }}
              onChange={(e) => {
                setNam(e.target.value);
              }}
              className="d-inp"
              type="text"
              value={nam}
            />
          </li>

          <CatList name="General" cat="item_g" />
          <CatList name="Daily" cat="item_g" />
          <CatList name="Weekly" cat="item_g" />
          <Category todo={todo} />
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
