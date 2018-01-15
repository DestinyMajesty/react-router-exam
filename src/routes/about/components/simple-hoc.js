import React, { Component } from 'react';

const simpleHoc = WrappedComponent => {
	console.log('simpleHoc');
	return class SimpleHoc extends Component {
		render() {
			return <WrappedComponent {...this.props} />
		}
	}
}
export default simpleHoc;