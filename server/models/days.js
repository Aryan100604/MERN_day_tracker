const mongoose = require("mongoose");
const daysSchema = new mongoose.Schema(
  {
    todos: [
      {
        task: {
          type: String,
        },
        category: {
          type: String,
        },
        completed: {
          type: Boolean,
        },
      },
    ],

    dayDescription: {
      type: String,
    },
  },
  { timestamps: true }
);

const Day = mongoose.model("day", daysSchema);
module.exports = Day;
