import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import  HomePage  from './home';
import  LoginPage  from './loginPage';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <Switch>
            <Route exect path="/login" component={LoginPage} />
            <Route exect path="/home" component={HomePage} /> 
          </Switch>
            </div>
                
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}


const connectedApp = connect(mapState, null)(App);
export default connectedApp;