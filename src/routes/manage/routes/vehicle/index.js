import React from 'react';
import { Route } from 'react-router-dom';
import VehicleForm from './components/vehicle';
import Whitelist from './routes/whitelist/whitelist';
import Model from './routes/model/model'

const Vehicle = ({ match }) => (
	<div>
		<Route exact path={`${match.url}`} component={VehicleForm}/>
        <Route path={`${match.url}/whitelist`} component={Whitelist} />
		<Route path={`${match.url}/model`} component={Model} />
	</div>
)
export default Vehicle; 