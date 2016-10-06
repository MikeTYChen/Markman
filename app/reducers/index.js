import { combineReducers } from 'redux';
import ActiveTask from './reducer_active_task';
import TasksReducer from './reducer_tasks';
import FoldersReducer from './reducer_folders';

const rootReducer = combineReducers({
	folders: FoldersReducer,
	tasks: TasksReducer,
	activeTask: ActiveTask,
});

export default rootReducer;
