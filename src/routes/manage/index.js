import React from 'react';
import { Route } from 'react-router-dom';
import User from './routes/user/user';
import Vehicle from './routes/vehicle';
import ManageForm from './components/manage';

const Manage = ({ match }) => (
	<div>
		<Route exact path={`${match.url}`} component={ManageForm}/>
		<Route path={`${match.url}/user`} component={User} />
		<Route path={`${match.url}/vehicle`} component={Vehicle} />
	</div>
)
export default Manage; 