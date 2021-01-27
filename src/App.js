import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Ingerdient from './IngerdientPage'
import  HomePage  from './home';
import  LoginPage  from './loginPage';
import alphaComponent from "./alphaComponent";
import mealDetails from "./mealDetails";
class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div >
            <Switch>
            <Route exect path="/login" component={LoginPage} />
            <Route exect path="/home" component={HomePage} /> 
            <Route exect path="/alphaComponent" component={alphaComponent}></Route>
            <Route exect path="/mealDetails" component={mealDetails}></Route>
            <Route exect path="/IngerdientPage" component={Ingerdient}></Route>
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