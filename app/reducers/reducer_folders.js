import { GET_FOLDERS } from '../actions/index';

const defaultFolders = [{folder_name: 'Inbox'}];

export default function(state = [], action) {	
	switch(action.type) {
		case GET_FOLDERS: {
			console.log("HI - get folder");
			console.log(action.payload);
			return action.payload;
		}
		default: {
			return state;
		}
	}
}