import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="w-full h-screen grid place-content-center bg-[#1a103d] text-white">
      {/* Centered div */}
      <div className="bg-[#332078] p-3 rounded-md max-h-[calc(100dvh-50px)]">
        <h2 className="text-center text-xl font-semibold mb-2">Todos</h2>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
