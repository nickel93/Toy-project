import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Experiment from './components/experiment/Experiment'
import Kanbancontainer from './container/Kanbancontainer'
const Routers = () => (
    <Switch>
        <Route exact path='/' component={Kanbancontainer} />
        <Route exact path='/experiment/1234/:id' component={Experiment} />
    </Switch>
)

export default Routers;
