import React, { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function EmptyToDo() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && <p className="empty-message">Enjoy your day</p>
  );
}

export default EmptyToDo;
