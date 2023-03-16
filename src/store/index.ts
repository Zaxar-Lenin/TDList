import {configureStore} from '@reduxjs/toolkit';
import {taskReduce} from "store/slice/taskSlice";

export const store = configureStore({
    reducer: {
        task: taskReduce,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
