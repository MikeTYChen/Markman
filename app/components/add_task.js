import React, { Component } from 'react';

import TaskList from '../containers/task_list';
import TaskDetail from '../containers/task_detail';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getTasks, postTask } from '../actions/index';


class AddTask extends Component {
	constructor(props) {
		super(props);
		this.state = {new_task: ''};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onInputChange(e) {
		this.setState({new_task: e.target.value});
	}
	onFormSubmit(event) {
		event.preventDefault();
		const task_name = this.state.new_task;
		this.setState({new_task: ''});
    	postTask(task_name);
    	this.props.getTasks();
	}
	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="form-group">
				<div className="input-group">
					<input 
						className="form-control" 
						value={this.state.new_task} 
						onChange = {this.onInputChange}
						placeholder="Add a Task..."
					/>
					<span className="input-group-btn">
						<button className="btn btn-default" type="submit">Add Task</button>
					</span>
				</div>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getTasks: getTasks }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddTask);