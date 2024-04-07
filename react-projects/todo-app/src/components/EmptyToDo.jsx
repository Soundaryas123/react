import React from "react";

function EmptyToDo({ todoItems }) {
  return (
    // <div>{todoItems.length==0 ? 'Enjoy your day':null}</div>
    <p className="empty-message">Enjoy your day</p>
  );
}

export default EmptyToDo;
