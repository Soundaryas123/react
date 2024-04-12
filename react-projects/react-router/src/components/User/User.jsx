import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <div className="text-center flex flex-col items-center justify-center m-4 bg-gradient-to-br from-green-600 to-blue-700 text-white p-8 rounded-lg shadow-xl min-h-[300px]">
      <h1 className="text-4xl font-bold mb-4">
        Discover the Mysteries of {userid}'s Profile
      </h1>
      <p className="text-2xl">Loading...</p>
    </div>
  );
};

export default User;
