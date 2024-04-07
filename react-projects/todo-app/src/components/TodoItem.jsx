import React from "react";
import styles from "../styles/TodoItem.module.css";
import { MdDelete } from "react-icons/md";

function TodoItem({ todoDate, todoItem, onDeleteItem }) {
  const onDelete = () => {
    onDeleteItem(todoItem);
  };

  return (
    <div className={`container text-center ${styles["container-margin"]}`}>
      <div className="row">
        <div
          className={`col-6 active ${styles["field"]} ${styles["left-allign"]}`}
        >
          {todoItem}
        </div>
        <div className={`col-4 ${styles["field"]} ${styles["left-allign"]}`}>
          {todoDate}
        </div>
        <div className="col-2">
          <button
            className={`btn btn-danger ${styles["btn-width"]}`}
            onClick={onDelete}
          >
           <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
