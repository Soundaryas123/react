import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-100"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className=" outline-none px-4 py-1 rounded-full shadow-lg text-black-700 text-white"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className=" outline-none px-4 py-1 rounded-full shadow-lg text-black-700 text-white"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className=" outline-none px-4 py-1 rounded-full shadow-lg text-black-700 text-white"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className=" outline-none px-4 py-1 rounded-full shadow-lg text-black-700 text-white"
              style={{ backgroundColor: "purple" }}
              onClick={() => setColor("purple")}
            >
              Purple
            </button>
            <button
              className=" outline-none px-4 py-1 rounded-full shadow-lg text-black-700 text-black-700"
              style={{ backgroundColor: "silver" }}
              onClick={() => setColor("silver")}
            >
              Silver
            </button>
            <button
              className=" outline-none px-4 py-1 rounded-full shadow-lg text-black-700 text-white"
              style={{ backgroundColor: "gold" }}
              onClick={() => setColor("gold")}
            >
              Gold
            </button>
            <button
              className=" outline-none px-4 py-1 rounded-full shadow-lg text-black-700 text-gray-500"
              style={{ backgroundColor: "pink" }}
              onClick={() => setColor("pink")}
            >
              Pink
            </button>
            <button
              className=" outline-none px-4 py-1 rounded-full shadow-lg text-black-700 text-white"
              style={{ backgroundColor: "orange" }}
              onClick={() => setColor("orange")}
            >
              Orange
            </button>
            <button
              className=" outline-none px-4 py-1 rounded-full shadow-lg text-black-700 text-white"
              style={{ backgroundColor: "violet" }}
              onClick={() => setColor("violet")}
            >
              Violet
            </button>
            <button
              className=" outline-none px-4 py-1 rounded-full shadow-lg text-black-700 text-gray-500"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
