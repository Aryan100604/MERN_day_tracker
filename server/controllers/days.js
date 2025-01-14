const Day = require("../models/days");
const addtheDay = (req, res) => {
  const body = req.body;
  Day.create({
    todos: body.todoList,
    dayDesription: body.dayDesription,
  })
    .then((req, res) => {
      return res.json({ message: "Todays Entry Added" });
    })
    .catch((req, res) => {
      return res.json({ message: "Oops Data is not added of today try again" });
    });
};

module.exports = { addtheDay };
