import { GET_FOLDERS, FOLDER_ADDED } from '../actions/index';

const defaultFolders = [{folder_name: 'Inbox'}];

export default function(state = [], action) {	
	switch(action.type) {
		case GET_FOLDERS: {
			console.log("HI - get folder");
			console.log(action.payload);
			return action.payload;
		}
		case FOLDER_ADDED: {
			console.log("HI - added task");
			return action.payload;
		}		
		default: {
			return state;
		}
	}
}