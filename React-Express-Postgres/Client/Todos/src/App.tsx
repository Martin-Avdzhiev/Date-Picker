import { useState, useEffect } from "react";
import { postTodo } from "./utils";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todoResponses, setTodoResponses] = useState<string[]>([]);

  useEffect(() => {}, [todoResponses]);

  const addTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!todo.trim()) return;
    console.log(todo);
    console.log(todoResponses);
    postTodo(todo).then((data) =>
      setTodoResponses((prev) => [data.todo, ...prev])
    );
    console.log(todoResponses);
    setTodo("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  return (
    <>
      <div className="container flex flex-col gap-12 w-2/4">
        <h1 className="text-black font-medium">Input Todo</h1>
        <div className="flex justify-center mt-2">
          <form method="POST" onSubmit={addTodoHandler} className="h-10">
            <label htmlFor="todo"></label>
            <input
              className="bg-white border border-black p-1 w-96 flex-1 text-black h-full"
              type="text"
              name="todo"
              value={todo}
              onChange={handleInputChange}
              placeholder="add todo"
            />
            <button
              type="submit"
              className="button bg-green-500 border border-black px-3 py-2 h-full"
            >
              Add
            </button>
          </form>
        </div>
        <div className="description text-black">
          <div className="container px-2 flex justify-start border-t border-b border-gray-300 font-bold text-left">
            <p className="flex-1 max-w-[50%]">Description</p>
            <p className="w-[25%]">Edit</p>
            <p>Delete</p>
          </div>
          {todoResponses.length > 0 && (
            <ul className="todo-list mt-4">
              {todoResponses.map((todo, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between border-b border-gray-300 py-2"
                >
                  <p className="flex-1 text-left text-black">{todo}</p>
                  <button className="button bg-yellow-500 border border-black px-3 py-1">
                    Edit
                  </button>
                  <button className="button bg-red-500 border border-black px-3 py-1">
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
