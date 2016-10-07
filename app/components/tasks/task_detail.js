import React, { Component } from 'react';
import {Checkbox, Radio} from 'react-icheck';

import { updateTask } from '../../actions/index';

class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {completed: false};
		this.onTaskClick = this.onTaskClick.bind(this);
	}
	onTaskClick() {
		const task_status = !this.state.completed;
		this.setState({completed: task_status });
		this.updateTask(task_status);
	}
	render() {
		return (
			<div>
			<li 
				onClick={this.onTaskClick}
				className={"list-group-item txt-capital " + (this.state.completed ? 'task-completed' : 'task-todo')}>
				<Checkbox
					checkboxClass="icheckbox_square-blue"
					checked={this.state.completed}
					onChange={this.onTaskClick}
				/>
				&nbsp; {this.props.task_name}
			</li>
			</div>
		)
	}
}
Task.propTypes = {
	task_name: React.PropTypes.string,
}

export default Task;