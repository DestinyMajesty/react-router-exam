import React, { Component } from 'react';
import simpleHoc from './simple-hoc';
import Usual from './usual';
import propsProxyHoc from './props-proxy-hoc';


// 不要在render方法内部使用高阶组件。简单来说react的差分算法会去比较 NowElement === OldElement, 来决定要不要替换这个elementTree。也就是如果你每次返回的结果都不是一个引用，react以为发生了变化，去更替这个组件会导致之前组件的状态丢失。
const NewUsual = simpleHoc(Usual);
const PropsProxyUsual = propsProxyHoc(Usual);

class About extends Component {
	constructor(props){
		super(props);
	}
	render() {
		// const NewUsual = simpleHoc(Usual); 这就是要不得的		
		return (
			<div className="About">
				<h1>高阶组件之属性代理：</h1>
                <h2>原始组件：</h2>
				<Usual dog="原始狗"/>
                <h2>简单高阶组件：</h2>
				<NewUsual dog="高阶狗"/>
                <h2>操作props的高阶组件：</h2>
				<PropsProxyUsual dog="属性代理狗"/>
			</div>
		);
	}
}

export default About;
