import { useState } from "react";
import "./App.css";
import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import EmptyToDo from "./components/EmptyToDo";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems([...todoItems, { name: itemName, dueDate: itemDueDate }]);
  };
  const handleDeleteItem = (todoName) => {
    let newItems = todoItems.filter((item) => {
      return item.name !== todoName;
    });
    setTodoItems(newItems);
  };
  return (
    <center>
      <AppName />
      <AddToDo onNewItem={handleNewItem} />
      {todoItems.length == 0 ? <EmptyToDo /> : null}
      <TodoItems todoItems={todoItems} onDeleteItem={handleDeleteItem} />
    </center>
  );
}

export default App;
