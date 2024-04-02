import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice.js";

const TaskInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  // Handle input form submit and preventing default refresh behaviour
  const submitForm = (event) => {
    event.preventDefault();
    // Add todo task to redux store
    dispatch(addTodo(todo));
    //Clear input field
    setTodo("");
  };

  return (
    <form
      className="flex items-center justify-center rounded-md overflow-hidden border border-[#61dafb] mx-2"
      onSubmit={submitForm}>
      <input
        type="text"
        name="todo"
        id="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter task"
        className="px-3 py-1.5 text-[#61dafb] bg-transparent"
      />
      <button
        className="bg-[#61dafb] text-black font-semibold px-3 py-1.5"
        type="submit">
        Add
      </button>
    </form>
  );
};
export default TaskInput;
