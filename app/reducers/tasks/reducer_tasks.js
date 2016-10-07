import {GET_TASKS, TASK_ADDED} from '../../actions/index';
const defaultTask = [];
export default function(state = defaultTask, action) {	
	switch(action.type) {
		case GET_TASKS: {
			return action.payload;
		}
		case TASK_ADDED: {
			console.log("TASK ADDED");
			return [action.payload, ...state];
		}
		default: {
			return state;
		}
	}
}