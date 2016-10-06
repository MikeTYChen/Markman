import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTasks, postTask } from '../actions/index';
import { bindActionCreators } from 'redux';

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
				<li 
					key={idx} 
					onClick={this.onTaskClick}
					className="list-group-item">
					{task.task_name}
				</li>
			)
		});
	}
	onTaskClick() {
		
		console.log("CLICKED ME");
	}
	onBtnClick() {
		this.props.getTasks();
	}
	render() {
		return (
			<div>

				<button className="btn btn-default" onClick={this.onBtnClick}>Fetch All Tasks</button>
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