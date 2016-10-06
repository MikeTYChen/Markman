import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTasks, postTask } from '../../actions/index';
import { bindActionCreators } from 'redux';


import Task from '../../components/tasks/task_detail';

class TaskList extends Component {
	constructor(props) {
		super(props);
		this.props.getTasks();
		this.onBtnClick = this.onBtnClick.bind(this);
		this.onTaskClick = this.onTaskClick.bind(this);
	}
	renderList() {
		return this.props.tasks.map((task, idx) => {
			return (
				<Task key={idx} task_name={task.task_name} />
			)
		});
	}
	onTaskClick() {
		console.log("CLICKED ME");
	}
	onBtnClick() {
		// <button className="btn btn-default" onClick={this.onBtnClick}>Fetch All Tasks</button>
		this.props.getTasks();
	}
	render() {
		return (
			<div>
				<ul className="list-group">
					{this.renderList()}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		tasks: state.tasks
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getTasks: getTasks, postTask: postTask }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);