import { useSelector } from "react-redux";
import Todo from "./Todo";

const TaskList = () => {
  // Fetch todos from redux store
  const todoData = useSelector((state) => state.todo.todos);
  return (
    <div className="flex flex-col gap-3 mt-5 max-h-[calc(100dvh-150px)] overflow-auto px-2">
      {/* Convert todos to Todo component */}
      {todoData.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
export default TaskList;
