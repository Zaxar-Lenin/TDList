import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskType } from 'store/slice/taskSlice/types';
import { v4 as uuidv4 } from 'uuid';

export interface taskState {
  tasks: TaskType[];
}

const initialState: taskState = {
  tasks: [
    { id: uuidv4(), title: 'Забрать ребенка из сада', isDone: true },
    { id: uuidv4(), title: 'Сходить в тренажерный зал ', isDone: true },
    { id: uuidv4(), title: 'выгул собак', isDone: true },
    { id: uuidv4(), title: 'почитать', isDone: true },
    { id: uuidv4(), title: 'почистить зубы', isDone: true },
  ],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      return;
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      const indexTask = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks.splice(indexTask, 1);
    },
  },
});

export const taskReduce = taskSlice.reducer;

export const { addTask, deleteTask } = taskSlice.actions;
