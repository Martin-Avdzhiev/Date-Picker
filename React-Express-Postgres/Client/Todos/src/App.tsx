// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");

  const addTodoHandler = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(todo);
    setTodo(""); 
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  return (
    <>
      <div className="container flex flex-col gap-12 w-2/4">
        <h1 className="text-black font-medium">Input Todo</h1>
        <div className="flex justify-center mt-2">
          <form method="POST" onSubmit={addTodoHandler}>
            <label htmlFor="todo"></label>
            <input
              className="bg-white border border-black p-1 w-96 flex-1 text-black"
              type="text"
              name="todo"
              value={todo}
              onChange={handleInputChange}
              placeholder="add todo"
            />
            <button type="submit" className="button bg-green-500 border border-black px-3 py-2">
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
        </div>
      </div>
    </>
  );
}

export default App;
