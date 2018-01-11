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


const BasicRouter = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/home">Home</Link></li>
				<li><Link to="/about">About</Link></li>
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
			</Switch>
		</div>
	</Router>
)
export default BasicRouter