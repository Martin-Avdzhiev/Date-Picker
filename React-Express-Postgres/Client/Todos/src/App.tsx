import { useState, useEffect } from "react";
import { getTodos, postTodo } from "./utils";
import TodoType from "./types";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect( () => {
      getTodos().then((x) => setTodos(x!)).catch((error) => console.error(error));
  }, []);

  const addTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!todo.trim()) return;
    postTodo(todo).then((data:TodoType) =>{
      setTodos((prev) => [data, ...prev])
    }
    );
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
              id="todo"
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
          {todos.length > 0 && (
            <ul className="todo-list mt-4">
              {todos.map((todo) => (
                <Todo todo={todo} key={todo.todo_id} setTodos={setTodos}/>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
