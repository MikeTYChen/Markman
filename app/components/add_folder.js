import React, { Component } from 'react';

import TaskList from '../containers/task_list';
import TaskDetail from '../containers/task_detail';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getFolders, postFolder } from '../actions/index';


class AddFolder extends Component {
	constructor(props) {
		super(props);
		this.state = {new_folder: ''};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onInputChange(e) {
		this.setState({new_folder: e.target.value});
	}
	onFormSubmit(event) {
		event.preventDefault();
		const folder_name = this.state.new_folder;
		this.setState({new_folder: ''});
    	postFolder(folder_name);
    	this.props.getFolders();
	}
	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="form-group">
				<div className="input-group">
					<input 
						className="form-control" 
						value={this.state.new_folder} 
						onChange = {this.onInputChange}
						placeholder="Add a Folder..."
					/>
					<span className="input-group-btn">
						<button className="btn btn-default" type="submit">Add Folder</button>
					</span>
				</div>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getFolders: getFolders }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddFolder);