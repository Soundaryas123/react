import React, { useState } from "react";
import styles from "../styles/AddToDo.module.css";
import { GrTableAdd } from "react-icons/gr";

function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddNewItem = () => {
    event.preventDefault()
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className={`container text-center ${styles["container-margin"]}`}>
      <form className="row"  onSubmit={handleAddNewItem}>
        <div className="col-6">
          <input
            type="text"
            value={todoName}
            placeholder="Enter Todo here"
            className={styles["field"]}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={dueDate}
            className={styles["field"]}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
          type="submit"
            className={`btn btn-success ${styles["btn-width"]}`}
           
          >
       <GrTableAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
