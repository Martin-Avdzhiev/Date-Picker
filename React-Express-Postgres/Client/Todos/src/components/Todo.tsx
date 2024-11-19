import TodoType from "../types";

export default function Todo({ todo }: { todo: TodoType;}) {
  return (
    <li
      className="flex items-center justify-between border-b border-gray-300 py-2"
    >
      <p className="flex-1 text-left text-black">{todo.description}</p>
      <button className="button bg-yellow-500 border border-black px-3 py-1">
        Edit
      </button>
      <button className="button bg-red-500 border border-black px-3 py-1">
        Delete
      </button>
    </li>
  );
}
