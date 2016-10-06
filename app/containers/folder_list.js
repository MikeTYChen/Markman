import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFolders } from '../actions/index';
import { bindActionCreators } from 'redux';

class FolderList extends Component {
	constructor(props) {
		super(props);
		this.props.getFolders();
	}
	renderList() {
		console.log('rende');
		console.log(this.props.folders);
		return this.props.folders.map((folder, idx) => {
			return (
				<li key={idx}><a href="#">{folder.folder_name}</a></li>
			)
		});
	}
	render() {
		return (
			<div>
				<h4 className="title-txt">All Folders</h4>
				<ul className="nav nav-sidebar">
					{this.renderList()}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log(state);
	return {
		folders: state.folders
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getFolders: getFolders }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FolderList);