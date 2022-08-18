import React, { useState } from "react";
import TodoContext from "./todoContext";

const TodoState = (props) => {
  const host = "http://localhost:5500/api/todo";
  let [todo, setTodo] = useState([]),
    [ptodo, setPtodo] = useState([]),
    [cat, setCat] = useState("general"),
    [catList, setCatList] = useState([]),
    [alert, setAlert] = useState(null),
    [catUp, setCatUp] = useState(false),
    [showT, setShowT] = useState(false),
    [showC, setShowC] = useState(false),
    [todoUp, setTodoUp] = useState(false),
    [isUndo, setIsUndo] = useState(false),
    d = new Date();

  const hSA = (prop) => {
    setShowT(prop);
  };

  const setTask = (val) => {
    setCat((cat = val));
    setPtodo(
      (ptodo = todo.filter((t) => {
        return t.from === val;
      }))
    );
  };

  const showAlert = (msg, type, visib) => {
    setAlert({
      msg,
      type,
      visib,
    });
  };
  setTimeout(() => {
    setAlert(null);
  }, 5000);

  // Fetch all Categories
  const fetchCat = async () => {
    const response = await fetch(`${host}/getc`, {
      method: "GET",
    });
    let list = await response.json();
    setCatList(list);
  };

  // Add a Category
  const addCat = async (name) => {
    if (!catUp) {
      const response = await fetch(`${host}/addc`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
        }),
      });
      let ncat = await response.json();
      setCatList((catList = [...catList, ncat]));
    } else {
      updateCat({
        name: name,
        _id: catUp._id,
      });
    }
    setShowC(false);
    showAlert("Added Category", "success", false);
  };

  // Update a Category
  const updateCat = async (upCat) => {
    const { name, _id } = upCat;
    await fetch(`${host}/updatc${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
      }),
    });

    let newCat = JSON.parse(JSON.stringify(catList));

    for (let i = 0; i < newCat.length; i++) {
      if (newCat[i]._id === _id) {
        newCat[i].name = name;
        break;
      }
    }
    setCatList(newCat);
    setCatUp(false);
    setShowC(false);
    showAlert("Updated Category", "success", true);
  };

  // Delete a Category
  const delCat = async (key) => {
    await fetch(`${host}/deletc${key.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const newCat = catList.filter((catList) => {
      return catList._id !== key.id;
    });
    setCatList(newCat);
    setTodo(
      (todo = todo.filter((t) => {
        let bool = t.from !== key.name;
        if (!bool) delTodo(t._id);
        return bool;
      }))
    );
    setTask("general");
    showAlert("Deleted Category", "success", true);
  };

  // Fetch all Notes
  const fetchTodo = async () => {
    const response = await fetch(`${host}/get`, {
      method: "GET",
    });
    let fTodo = await response.json(),
      task = window.location.href.split("//")[1].split("/")[1].toLowerCase();
    setTodo(fTodo);
    setPtodo(
      (ptodo = fTodo.filter((t) => {
        return t.from === task;
      }))
    );
    console.log(task);
  };

  // Add a Note
  const addTodo = async (Adnote) => {
    const { title, description, from } = Adnote;
    if (!todoUp) {
      const response = await fetch(`${host}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title:
            (cat === "daily" || cat === "weekly" ? d.getDay() : "") +
            title +
            cat,
          description: description,
          from: from,
        }),
      });

      let ntodo = await response.json();
      setTodo((todo = [...todo, ntodo]));
      setPtodo((ptodo = [...ptodo, ntodo]));
      showAlert("Added Todo", "success", false);
    } else {
      updateTodo({
        title: title === "" ? todoUp.title : title + cat,
        description:
          description === "" ? todoUp.description : description + cat,
        _id: todoUp._id,
      });
    }
    hSA(false);
  };

  // Update a Note
  const updateTodo = async (upNote) => {
    const { title, description, _id, done } = upNote;
    await fetch(`${host}/update${upNote._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: (cat === "daily" || cat === "weekly" ? d.getDay() : "") + title,
        description: description,
        done: done,
      }),
    });

    let newTodo = JSON.parse(JSON.stringify(todo));

    for (let i = 0; i < newTodo.length; i++) {
      if (newTodo[i]._id === _id) {
        newTodo[i].title =
          (cat === "daily" || cat === "weekly" ? d.getDay() : "") + title;
        newTodo[i].description = description;
        newTodo[i].done = done;
        showAlert("Updated Todo", "success", true);
        break;
      }
    }
    setTodo((todo = newTodo));
    setTask(cat);
    setTodoUp(false);
  };

  // Delete a Note
  const delTodo = async (id) => {
    await fetch(`${host}/delete${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newTodo = todo.filter((todo) => {
      return todo._id !== id;
    });
    setTodo(newTodo);
    setPtodo(
      (ptodo = ptodo.filter((todo) => {
        return todo._id !== id;
      }))
    );
    showAlert("Deleted Todo", "success", true);
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        cat,
        ptodo,
        alert,
        catList,
        showT,
        showC,
        catUp,
        todoUp,
        isUndo,
        setIsUndo,
        hSA,
        setTodoUp,
        setTask,
        setTodo,
        delTodo,
        addTodo,
        fetchTodo,
        updateTodo,
        setShowC,
        setCatList,
        setCatUp,
        setCat,
        fetchCat,
        delCat,
        addCat,
        updateCat,
        showAlert,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
