export const GET_FOLDERS = 'GET_FOLDERS';
export const FOLDER_ADDED = 'FOLDER_ADDED';

export const GET_TASKS = 'GET_TASKS';
export const TASK_ADDED = 'TASK_ADDED';
export const TASK_UPDATED = 'TASK_UPDATED';

export function getFolders(task) {
	// const ROOT_URL = 'http://markman-app.herokuapp.com';
	const ROOT_URL = 'http://localhost:8000';
	const all_folders_url = `${ROOT_URL}/api/v1/folder/all`;
	const folders = $.get(all_folders_url);
	console.log(folders);
	return {
		type: GET_FOLDERS,
		payload: folders,	
	}
}

export function postFolder(folder_name) {
	// const ROOT_URL = 'http://markman-app.herokuapp.com';
	const ROOT_URL = 'http://localhost:8000';
	const post_folder_url = `${ROOT_URL}/api/v1/folder/all`;
	const all_folders_url = `${ROOT_URL}/api/v1/folder/all`;
	const new_folder = {
		folder_name: folder_name,
	}
	const folder = $.post(post_folder_url, new_folder);
	const folders = $.get(all_folders_url);
	console.log(folder_name);
	console.log("POST FOLDr")
	return {
		type: FOLDER_ADDED,
		payload: folders,	
	}
}

export function getTasks(task) {
	// const ROOT_URL = 'http://markman-app.herokuapp.com';
	console.log('aciton');
	const ROOT_URL = 'http://localhost:8000';
	const all_tasks_url = `${ROOT_URL}/api/v1/task/all`;
	const tasks = $.get(all_tasks_url);
	return {
		type: GET_TASKS,
		payload: tasks,	
	}
}

export function postTask(task_name) {
	// const ROOT_URL = 'http://markman-app.herokuapp.com';
	const ROOT_URL = 'http://localhost:8000';
	const post_task_url = `${ROOT_URL}/api/v1/task/all`;
	const sample_task = {
		task_name: task_name,
		date_due: '1993-06-16T00:00:00',
		date_created: '1993-06-16T00:00:00',
	}
	const task = $.post(post_task_url, sample_task);	
	const tasks = $.get(post_task_url);
	return {
		type: TASK_ADDED,
		payload: tasks,	
	}
}

export function updateTask(task_id, task_status) {
	// const ROOT_URL = 'http://markman-app.herokuapp.com';
	console.log('updating task');
	const ROOT_URL = 'http://localhost:8000';
	const post_task_url = `${ROOT_URL}/api/v1/task/${task_id}/`;
	const all_tasks_url = `${ROOT_URL}/api/v1/task/all`;
	const sample_task = {
		completed: task_status,
	}
	const task = $.ajax({
		url: post_task_url,
		type:  "PATCH",
		data: {
			completed: task_status,
		}
	});
	return {
		type: TASK_UPDATED,
		payload: task,	
	}
}