import React from 'react';
import { Route } from 'react-router-dom';
import SystemForm from './components/system';
import Factory from './routes/factory/factory';
import Project from './routes/project/project';

const System = ({ match }) => (
	<div>
		<Route exact path={`${match.url}`} component={SystemForm}/>
		<Route path={`${match.url}/factory`} component={Factory} />
		<Route path={`${match.url}/project`} component={Project} />
	</div>
)
export default System; 


