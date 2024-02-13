import { useState } from "react";
import React from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className=" container">
      <h1 className="text-center">todos</h1>

      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setTodos([...todos, inputValue]);
                setInputValue("");
              }
            }}
            placeholder="What do you need to do?"
          />
        </li>
        {todos.map((t, index) => (
          <li key={index}>
            {t}
          </li>
        ))}
      </ul>

      <div>items left</div>
    </div>
  );
};

export default Home;
