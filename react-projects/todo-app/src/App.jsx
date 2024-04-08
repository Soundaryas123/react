import { useState } from "react";
import "./App.css";
import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import EmptyToDo from "./components/EmptyToDo";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => {
      return [...currValue, { name: itemName, dueDate: itemDueDate }];
    });
  };
  const deleteItem = (todoName) => {
    let newItems = todoItems.filter((item) => {
      return item.name !== todoName;
    });
    setTodoItems(newItems);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center>
        <AppName />
        <AddToDo />
        <EmptyToDo />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
