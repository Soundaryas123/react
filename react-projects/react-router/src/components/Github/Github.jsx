import React from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gradient-to-br from-purple-800 to-indigo-900 text-white p-8 rounded-lg shadow-xl">
      <h1 className="text-4xl font-bold mb-4">Discover Your Github Realm</h1>
      <div className="flex items-center justify-center mb-8">
        <img
          src={data.avatar_url}
          alt="Github Avatar"
          className="rounded-full border-4 border-white shadow-md"
          width={150}
        />
      </div>
      <div className="text-2xl">
        <p className="mb-2">Welcome, adventurer! Your Github followers await:</p>
        <p className="text-3xl font-bold">{data.followers}</p>
      </div>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/soundaryas123");
  return response.json();
};
