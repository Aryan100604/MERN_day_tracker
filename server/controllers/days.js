const Day = require("../models/days");
const addtheDay = async (req, res) => {
  try {
    const body = req.body;
    await Day.create({
      todos: body.todoList,
      dayDescription: body.dayDescription,
    });

    return res.status(201).json({ message: "Todays Entry Added" });
  } catch (err) {
    console.log(err);
    return res.status(404).json({ message: "Data entry is not added" });
  }
};

module.exports = { addtheDay };
