import React, { Component } from 'react';
import {Checkbox, Radio} from 'react-icheck';

class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {completed: false};
		this.onTaskClick = this.onTaskClick.bind(this);
	}
	onTaskClick() {
		this.setState({completed: !this.state.completed });
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