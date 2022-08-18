import React, { useContext } from "react";
import todoContext from "../context/todoContext";
import CatList from "./CatList";

const Category = (props) => {
  const tContext = useContext(todoContext);
  let { catList } = tContext;

  return (
    <>
      {catList.map((key) => {
        return (
          <CatList
            cate={key}
            key={key.name}
            name={key.name}
            id={key._id}
            cat="item"
          />
        );
      })}
    </>
  );
};

export default Category;
