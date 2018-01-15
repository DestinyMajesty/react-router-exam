import React, { Component } from 'react';

const propsProxyHoc = WrappedComponent => class PropsProxyHoc extends Component {

	handleClick() {
		console.log('click');
	}

	render() {
		return (<WrappedComponent
			{...this.props}
			handleClick={this.handleClick}
		/>);
	}
};
export default propsProxyHoc;
