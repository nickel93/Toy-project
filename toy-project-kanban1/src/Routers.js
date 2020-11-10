import React from 'react';
import { Route } from 'react-router-dom';
import Experiment from './components/experiment/Experiment'
import Board from './components/Board';

export let board = () => (
    <Route path={'/experiment'}
        render={(props) => <Board data={props.experiments} />}
    />
);

export let experiment = () => (
    <Route path={'/experiment/1234/:id'}
        render={() => <Experiment />}
    />
);



