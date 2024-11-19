import { useState } from "react";
import TodoType from "../types";
import { editTodo } from "../utils";

export default function EditModal({
  setShowModal,
  todo,
  setTodos,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  todo: TodoType;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}) {
  const [inputDescription, setInputDescription] = useState(todo.description);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputDescription(e.target.value);
  };
  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const editedTodo = await editTodo({...todo, description: inputDescription});
    if (editedTodo) {
      setTodos((todos) => {
        const editedIndex = todos.findIndex(
          (todo) => todo.todo_id == editedTodo.todo_id
        );
        todos.splice(editedIndex, 1, editedTodo);
        return todos.slice();
      });
    }
    setShowModal(false)
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Edit Todo</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  x
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                <form action="PUT" className="flex flex-col" onSubmit={onSubmitHandler}>
                  <label htmlFor="description"></label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    className="bg-white"
                    placeholder="Description"
                    value={inputDescription}
                    onChange={onChangeHandler}
                  />
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Save Changes
                    </button>
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="opacity-25 fixed inset-0 z-60 bg-black"
        onClick={() => setShowModal(false)}
      ></div>
    </>
  );
}
