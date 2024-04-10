import React, { useContext, useRef, useState } from "react";
import styles from "../styles/AddToDo.module.css";
import { GrTableAdd } from "react-icons/gr";
import { TodoItemsContext } from "../store/todo-items-store";

function AddToDo() {
  const {addNewItem} =useContext(TodoItemsContext)
  const todoNameElement = useRef();
  const dueDateNameElement = useRef();

  const handleAddNewItem = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateNameElement.current.value;
    addNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    dueDateNameElement.current.value = "";
  };

  return (
    <div className={`container text-center ${styles["container-margin"]}`}>
      <form className="row" onSubmit={handleAddNewItem}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            className={styles["field"]}
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className={styles["field"]}
            ref={dueDateNameElement}
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


