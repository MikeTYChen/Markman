import React, { Component } from 'react';

import TaskList from '../containers/task_list';
import AddTask from '../components/add_task';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import MainContainer from '../components/main_container';

import TaskDetail from '../containers/task_detail';


export default class App extends Component {
	render() {
		console.log(new Date().toLocaleString());
		return (
			<div>
				<Navbar />
				<div className="container-fluid">					
		  			<div className="row">
						<Sidebar />
						<MainContainer />
      				</div>
    			</div>
			</div>
		);
	}
}
