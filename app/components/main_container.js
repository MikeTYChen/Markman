import React, { Component } from 'react';
import TaskList from '../containers/task_list';
import AddTask from '../components/add_task';

class Navbar extends Component {
	render() {
		return (
			<div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">			
				<div className="col-sm-12">
					<h2 className="page-header">Add A Task</h2>
					<AddTask />
				</div>
				<div className="col-sm-12">
					<h2 className="page-header">All Tasks</h2>
					<TaskList />
				</div>
			</div>
		)
	};
}

export default Navbar;