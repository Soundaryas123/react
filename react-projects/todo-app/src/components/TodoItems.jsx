import React from "react";
import TodoItem from "./TodoItem";

function TodoItems({ todoItems, onDeleteItem }) {
  return (
    <>
      {todoItems.map((item) => {
        return (
          <TodoItem
          key={item.name}
            todoDate={item.dueDate}
            todoItem={item.name}
            onDeleteItem={onDeleteItem}
          />
        );
      })}
    </>
  );
}

export default TodoItems;
