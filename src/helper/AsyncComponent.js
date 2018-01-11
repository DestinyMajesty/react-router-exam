import React, { Component } from "react";

// 用于代码分片的函数，它接收 () => import("./containers/Home") 作为参数,必须传递函数进来，因为涉及到相对路径的问题，返回该参数的组件
export default function asyncComponent(importComponent) {
	class AsyncComponent extends Component {
		constructor(props) {
			super(props);
			this.state = {
				component: null
			};
		}
		async componentDidMount() {
			const { default: component } = await importComponent();
			this.setState({
				component: component
			});
		}
		render() {
			const C = this.state.component;
			return C ? <C {...this.props} /> : null;
		}
	}
	return AsyncComponent;
}
