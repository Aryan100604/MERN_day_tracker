import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);

  const [inputTask, setInputTask] = useState("");

  const [inputCategory, setInputCategory] = useState("");
  const [dayDescription, setDayDescription] = useState("");
  function handleMarkAsDone(index) {
    setTodoList(
      todoList.map((task, id) => {
        return index === id ? { ...task, completed: true } : task;
      })
    );
  }
  async function handleSubmit(e) {
    e.preventDefault();
    await axios
      .post("http://localhost:8040/days", {
        todoList,
        dayDescription,
      })
      .then(() => {
        console.log("Day added");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="whole-body">
      <div className="container">
        <input
          type="text"
          placeholder="Enter your task"
          onChange={(e) => setInputTask(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter the category of the task"
          onChange={(e) => setInputCategory(e.target.value)}
        />
        <br />
        <button
          onClick={() => {
            setTodoList([
              ...todoList,
              {
                task: inputTask,
                category: inputCategory,
                completed: false,
              },
            ]);
          }}
        >
          Add Task
        </button>
        <div className="list">
          {todoList
            .filter((item) => !item.completed)
            .map((item, index) => {
              return (
                <div className="card" key={index}>
                  <h2>{item.task}</h2>
                  <h4>{item.category}</h4>
                  <span>
                    <button
                      className="done-btn"
                      onClick={() => handleMarkAsDone(index)}
                    >
                      Done
                    </button>
                  </span>
                </div>
              );
            })}
        </div>
        <textarea
          name="dayDes"
          placeholder="How did the day went ,reflect on it here"
          onChange={(e) => setDayDescription(e.target.value)}
        ></textarea>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
