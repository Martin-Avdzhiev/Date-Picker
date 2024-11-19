import { useState } from "react";
import TodoType from "../types";
import { deleteTodo } from "../utils";
import EditModal from "./editModal";
export default function Todo({ todo, setTodos }: { todo: TodoType, setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>}) {
    const [showModal, setShowModal] = useState(false);
    const editHandler = async () => {
        setShowModal(true);
    }
  
    const deleteHandler = (id:number) => {
    deleteTodo(id);
    setTodos((todos) => todos.filter((x) => x.todo_id != id));
  }
    return (
    <li
      className="flex items-center justify-between border-b border-gray-300 py-2"
    >
      <p className="flex-1 text-left text-black">{todo.description}</p>
      <button 
      onClick={editHandler}
      className="button bg-yellow-500 border border-black px-3 py-1">
        Edit
      </button>
      <button 
      onClick={() => deleteHandler(todo.todo_id)}
      className="button bg-red-500 border border-black px-3 py-1">
        Delete
      </button>
      {showModal ? <EditModal setShowModal={setShowModal} todo={todo} setTodos={setTodos}/> : null}
    </li>
  );
}
