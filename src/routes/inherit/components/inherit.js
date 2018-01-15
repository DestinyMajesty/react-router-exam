import React, { Component } from 'react';
import Usual from './usual';
import iiHoc from './ii-hoc';
import hijack from './hijack-render';

const IIusual = iiHoc(Usual);
const RedUsual = hijack({type: 'add-style', style: { color: 'red'}})(Usual);
class Inherit extends Component {
	constructor(props){
		super(props);
	}
	render() {	
		return (
			<div className="About">
				<h1>高阶组件之反向继承：</h1>
                <h2>原始组件：</h2>
                <Usual/>
                <h2>高阶组件:普通反向继承</h2>
                <IIusual/>
                <h2>渲染劫持</h2>
                <RedUsual/>
			</div>
		);
	}
}

export default Inherit;