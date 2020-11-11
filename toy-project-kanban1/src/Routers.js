import React from 'react';
import { Route, Router } from 'react-router-dom';
import Experiment from './components/experiment/Experiment'
import Board from './components/Board';

//X
const Routers = () => {
    return (
        <Router>
            <Route path={'/experiment'}
                render={(props) => <Board data={props.experiments} />}
            />
            <Route path={'/experiment/1234/:id'}
                render={() => <Experiment />}
            />
        </Router>
    )

}

export default Routers;



