import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	Switch,
} from 'react-router-dom'
import asyncComponent from "./helper/AsyncComponent";


const AsyncHome = asyncComponent(() => import("./routes/home"));
const AsyncAbout = asyncComponent(() => import("./routes/about"));
const AsyncSystem = asyncComponent(() => import("./routes/system"));
const AsyncManage = asyncComponent(() => import("./routes/manage"));
const AsyncInherit = asyncComponent(() => import("./routes/inherit"));

const BasicRouter = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/home">首页</Link></li>
				<li><Link to="/about">高阶组件-属性代理</Link></li>
				<li><Link to="/inherit">高阶组件-反向继承</Link></li>
				<li><Link to="/manage">Manage</Link></li>
				<li><Link to="/system">System</Link></li>				
			</ul>
			<hr />

			<Switch>
				{/* 默认路由的实现 */}
				<Route exact path="/" render={() => ((<Redirect to="/home" />))} />
				<Route path="/home" exact component={AsyncHome}/>
				<Route path="/about" component={AsyncAbout}/>
				<Route path="/system" component={AsyncSystem} />
				<Route path="/manage" component={AsyncManage} />
				<Route path="/inherit" component={AsyncInherit} />
			</Switch>
		</div>
	</Router>
)
export default BasicRouter