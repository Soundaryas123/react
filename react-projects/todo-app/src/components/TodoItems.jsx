import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItems() {
  const {todoItems}=useContext(TodoItemsContext);
  return (
    <>
      {todoItems.map((item) => {
        return (
          <TodoItem
          key={item.name}
            todoDate={item.dueDate}
            todoItem={item.name}
           
          />
        );
      })}
    </>
  );
}

export default TodoItems;
