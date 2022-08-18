const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const Category = require("../models/Category");
const { body, validationResult } = require("express-validator");

// ROUTE 1 => Get all the Tasks using: GET "/api/todo/get"
router.get("/get", async (req, res) => {
  let list = await Task.find();
  res.json(list);
});
// ROUTE 1A => Get all the Categories using: GET "/api/todo/getc"
router.get("/getc", async (req, res) => {
  let list = await Category.find();
  res.json(list);
});

// ROUTE 2 => Add a Task using: POST "api/todo/add"
router.post(
  "/add",
  [
    body("title", "Enter a valid Title Name").isLength({ min: 3 }),
    body("description", "Description must be atleast 10 characters").isLength({
      min: 10,
    }),
  ],
  async (req, res) => {
    const { title, description, from, done } = req.body;

    // If there are errors, return Bad Request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.json({ errors: errors.array() });

    try {
      const todo = new Task({
        title,
        description,
        from,
        done,
      });
      const savedTodo = await todo.save();
      res.json(savedTodo);
    } catch (error) {
      console.log(error.messege);
      res.json({ error: "Some Internal Error Occured while adding your task" });
    }
  }
);
// ROUTE 2A => Add a Category using: POST "api/todo/addc"
router.post(
  "/addc",
  [body("name", "Category Name must be atleast 3 character")],
  async (req, res) => {
    const { name } = req.body;

    //If there are errors, return Bad Request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty) return res.json({ errors: errors.array });

    try {
      const catt = new Category({ name });
      const savedCatt = await catt.save();
      res.json(savedCatt);
    } catch (error) {
      console.log(error.message);
      res.json({
        error: "Some Internal Error Occured while adding your category",
      });
    }
  }
);

// ROUTE 3 => Update an existing Task using: PUT "/api/todo/update"
router.put(
  "/update:id",
  [
    body("title", "Enter a valid Title").isLength({ min: 3 }),
    body("description", "Description must be atleast 10 characters").isLength({
      min: 10,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, done } = req.body;

      // Create a new Task object
      const newTodo = {};
      if (title) newTodo.title = title;
      if (description) newTodo.description = description;
      if (done) newTodo.done = done;

      // Find the todo to be Updated
      let todo = await Task.findById(req.params.id);
      if (!todo) res.json({ error: "Task not found" });

      todo = await Task.findByIdAndUpdate(
        req.params.id,
        { $set: newTodo },
        { new: true }
      );
      res.json({ todo: todo });
    } catch (error) {
      console.log({ err: error.message });
      res.json({ error: "Internal Server Error" });
    }
  }
);
// ROUTE 3A => Update an existing Category using: PUT "/api/todo/update"
router.put(
  "/updatc:id",
  [body("name", "Enter a valid Name").isLength({ min: 3 })],
  async (req, res) => {
    try {
      const { name } = req.body;

      // Create a new Category object
      const newCategory = {};
      if (name) newCategory.name = name;

      // Find the todo to be Updated
      let catt = await Category.findById(req.params.id);
      if (!catt) res.json({ error: "Category not found" });

      catt = await Category.findByIdAndUpdate(
        req.params.id,
        { $set: newCategory },
        { new: true }
      );
      res.json({ catt: catt });
    } catch (error) {
      console.log({ err: error.message });
      res.json({ error: "Internal Server Error" });
    }
  }
);

// ROUTE 4 => Update an existing Task using: PUT "/api/todo/update"
router.delete("/delete:id", async (req, res) => {
  try {
    // Find the todo to be Deleted and delete it
    let todo = await Task.findById(req.params.id);
    if (!todo) res.json({ error: "Not Found" });

    todo = await Task.findByIdAndDelete(req.params.id);
    res.json({ success: "Note has been deleted", todo: todo });
  } catch (error) {
    console.log({ err: error.message });
    res.json({ error: "Internal Server Error" });
  }
});
// ROUTE 4A => Update an existing Category using: PUT "/api/todo/update"
router.delete("/deletc:id", async (req, res) => {
  try {
    // Find the todo to be Deleted and delete it
    let catt = await Category.findById(req.params.id);
    if (!catt) res.json({ error: "Category Not Found" });

    catt = await Category.findByIdAndDelete(req.params.id);
    res.json({ success: "Category has been deleted", catt: catt });
  } catch (error) {
    console.log({ err: error.message });
    res.json({ error: "Internal Server Error" });
  }
});

module.exports = router;
