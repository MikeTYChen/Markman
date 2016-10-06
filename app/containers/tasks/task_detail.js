import React, { Component } from 'react';
import {connect} from 'react-redux';

class TaskDetail extends Component {
	render() {
		if(!this.props.task) {
			return <div> Select a Task to get started </div>
		}
		return (
			<div> 
				<h3>Details for: </h3>
				<div>Task: {this.props.task.title}</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		task: state.activeTask
	}
}

export default connect(mapStateToProps)(TaskDetail);