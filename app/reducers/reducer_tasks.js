import {GET_TASKS, TASK_ADDED} from '../actions/index';
const defaultTask = [];
export default function(state = null, action) {	
	switch(action.type) {
		case GET_TASKS: {
			console.log("HI - get task");
			return action.payload;
		}
		case TASK_ADDED: {
			console.log("HI - added task");
			return action.payload;
		}		
		default: {
			return defaultTask;
		}
	}
}