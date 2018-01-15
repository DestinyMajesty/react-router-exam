import React, { Component } from 'react';
export default class Usual extends Component {
	constructor(props) {
		super(props);
		this.state = {
			usual: 'usual',
		}
	}
	render() {
		const {dog} = this.props;
		return (
			<div>
				<p>输出props：</p>
				<p>狗狗：{dog}</p>
        	</div>
		)
	}
}