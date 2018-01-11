import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class System extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toHome: false,
		}
	}
	goToFactory = () => {
		this.setState({
			toHome:true,
		})
	}


	render() {
		const { toHome } = this.state;
		return (
			<div className="system">
				{toHome && 
					<Redirect 
						to={{
							pathname: '/about',
							search: '?utm=your+face',
							state: { test: 'mytest' }
						}} 
					/>
				}
				<p>系统</p>
				<button onClick={this.goToFactory}>点击跳转工厂</button>

			</div>
		);
	}
}

export default System;
