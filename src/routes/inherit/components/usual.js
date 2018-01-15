import React, { Component } from 'react';
// import hijackRenderHoc from './hijack-render';

export default class Usual extends Component {
	static log() {
		console.log('log')
	}
	constructor(props) {
		super(props);
		this.state = {
			usual: 'usual',
		}
	}

	componentDidMount() {
		console.log('didMount')
	}

	render() {
		const {cat} = this.props;
		return (
			<div>
				<p>猫猫：{cat}</p>
      		</div>
		)
	}
}