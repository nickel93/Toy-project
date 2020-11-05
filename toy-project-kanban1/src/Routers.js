import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Detail from './components/detail/Detail';
import Kanbancontainer from './container/Kanbancontainer'
export default () => (
    <Switch>
        <Route exact path='/' component={Kanbancontainer} />
        <Route exact path='/detail:id' component={Detail} />
    </Switch>
)
