const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

connectToMongo();
const app = express();
const port = 5500;

app.use(express.json());
app.use(cors());

// Available Routes
app.use("/api/todo", require("./routes/todo"));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
