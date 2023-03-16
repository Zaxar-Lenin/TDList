import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskType, TypeUpdateIsDone, TypeUpdateTitle } from 'store/slice/taskSlice/types';
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
      const newTask = {
        id: uuidv4(),
        title: action.payload,
        isDone: false,
      };
      state.tasks.push(newTask);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      const indexTask = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks.splice(indexTask, 1);
    },
    updateIsDone: (state, action: PayloadAction<TypeUpdateIsDone>) => {
      const { id, newValue } = action.payload;
      state.tasks.forEach(task => task.id === id ? task.isDone = newValue : task);
    },
    editTitleTask: (state, action: PayloadAction<TypeUpdateTitle>) => {
      const { id, newTitle } = action.payload;
      state.tasks.forEach(task => task.id === id ? task.title = newTitle : task);
    },
  },
});

export const taskReduce = taskSlice.reducer;

export const { addTask, deleteTask, updateIsDone, editTitleTask } = taskSlice.actions;
