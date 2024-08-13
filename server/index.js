const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/employee", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

// Corrected the order of req and res parameters
app.post("/Login", (req, res) => {
  const { email, password } = req.body;

  EmployeeModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("Wrong password");
        }
      } else {
        res.json("User not found");
      }
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ message: "Internal server error", error: err.message });
    });
});

app.post("/Signup", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employee) => res.status(201).json(employee))
    .catch((err) => {
      console.error(err);
      res
        .status(400)
        .json({ message: "Error registering employee", error: err.message });
    });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
