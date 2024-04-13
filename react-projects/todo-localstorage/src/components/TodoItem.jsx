import React, { useState } from "react";
import { useTodo } from "../contexts";
import { FaSave } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const TodoItem = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
        disabled={isTodoEditable}
      />

      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg text-[#172842] ${
          isTodoEditable
            ? "border-gray-400 border-2 px-2 bg-white"
            : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        readOnly={!isTodoEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      <button
        className={`inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center ${
          todo.completed ? 'bg-gray-200 text-gray-400' : 'bg-gray-50 hover:bg-gray-100'
        }  shrink-0`}
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
     
        {isTodoEditable ? <FaSave /> : <FaRegEdit />}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        <MdDeleteForever />
      </button>
    </div>
  );
};

export default TodoItem;
