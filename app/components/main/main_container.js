import React, { Component } from 'react';
import TaskList from '../../containers/tasks/task_list';
import AddTask from '../tasks/add_task';
import AddFolder from '../folders/add_folder';

class Navbar extends Component {
	render() {
		return (
			<div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
				<div className="row">
					<div className="col-sm-6">
						<h2 className="page-header">Add A Task</h2>
						<AddTask />
					</div>
					<div className="col-sm-6">
						<h2 className="page-header">Add A Folder</h2>
						<AddFolder />
					</div>					
					<div className="col-sm-12">
						<h2 className="page-header">All Tasks</h2>
						<TaskList />
					</div>
				</div>
			</div>
		)
	};
}

export default Navbar;