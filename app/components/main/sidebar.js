import React, { Component } from 'react';
import FolderList from '../../containers/folders/folder_list'
import AddFolder from '../folders/add_folder';

class Sidebar extends Component {
	render() {
		return (			
			<div className="col-sm-3 col-md-2 sidebar">
					<FolderList />
					<AddFolder />		
			</div>
		)
	};
}

export default Sidebar;