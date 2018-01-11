import React, { Component } from 'react';

class About extends Component {
	constructor(props){
		super(props);
	}
	render() {
		const urlState = this.props.location;
		console.log(urlState);
		return (
			<div className="About">
                这是一个关于路由的悲伤的故事
			</div>
		);
	}
}

export default About;
