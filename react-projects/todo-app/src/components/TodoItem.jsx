import React, { useContext } from "react";
import styles from "../styles/TodoItem.module.css";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoDate, todoItem }) {
  const onDelete = () => {
    deleteItem(todoItem);
  };
  const { deleteItem } = useContext(TodoItemsContext);
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
