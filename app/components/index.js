import React, { Component } from 'react';

import Navbar from './main/navbar';
import Sidebar from './main/sidebar';
import MainContainer from './main/main_container';


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
