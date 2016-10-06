import { combineReducers } from 'redux';
import ActiveTask from './tasks/reducer_active_task';
import TasksReducer from './tasks/reducer_tasks';
import FoldersReducer from './folders/reducer_folders';

const rootReducer = combineReducers({
	folders: FoldersReducer,
	tasks: TasksReducer,
	activeTask: ActiveTask,
});

export default rootReducer;
