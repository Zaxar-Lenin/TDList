import {RootState} from "store/index";

const getTasks = (state: RootState) => state.task.tasks


export {
    getTasks
}