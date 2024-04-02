import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Fetch saved todos from localStorage
  todos: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Math.random().toString(36).substring(2, 15),
        task: action.payload,
        completed: false,
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleTodoCompleted: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) todo.completed = action.payload.isChecked;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, removeTodo, toggleTodoCompleted } = todoSlice.actions;
export default todoSlice.reducer;
