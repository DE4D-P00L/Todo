import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoCompleted } from "../features/todoSlice.js";

const Todo = ({ todo }) => {
  //Set default checked value
  const [taskDone, setTaskDone] = useState(todo.completed);
  const dispatch = useDispatch();

  //Handle checkbox change event and dispatching toggleTodoCompleted action
  const handleChange = (event) => {
    dispatch(
      toggleTodoCompleted({ id: todo.id, isChecked: event.target.checked })
    );
    setTaskDone(event.target.checked);
  };

  return (
    <div className="bg-[#845afc] px-3 py-2 rounded-md flex items-center justify-between">
      <div className="flex gap-1 items-center">
        <input
          type="checkbox"
          name="done"
          id="done"
          onChange={handleChange}
          checked={todo.completed}
        />
        <h2 className={`${taskDone && "line-through"}`}>{todo.task}</h2>
      </div>
      {/* Dispatch removeTodo action on button click*/}
      <button onClick={() => dispatch(removeTodo(todo.id))}>
        <MdDelete className="text-red-500 text-xl" />
      </button>
    </div>
  );
};
export default Todo;
