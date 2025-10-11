import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: number;
  title: string;
  desc: string;
}

interface TodoState {
  tasks: Task[];
  editingTaskId: number | null;
}

const initialState: TodoState = {
  tasks: [],
  editingTaskId: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.map((t) =>
        t.id === action.payload.id ? action.payload : t
      );
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
    setEditingTaskId: (state, action: PayloadAction<number | null>) => {
      state.editingTaskId = action.payload;
    },
  },
});

export const { setTasks, addTask, updateTask, deleteTask, setEditingTaskId } =
  todoSlice.actions;
export default todoSlice.reducer;
