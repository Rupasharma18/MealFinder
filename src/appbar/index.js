import React from "react";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {connect} from "react-redux";
import {userActions} from "../actions"
console.log(userActions, "++++++++++usractio")

const styles =() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
})
class Logout extends React.Component{
    constructor(props){
        super(props)
    }
logout(){
this.props.logout()
}

    render(){
        const {classes} =this.props 
        return (
            <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    HOME 
                </Typography>
                <Button color="inherit" onClick={this.logout.bind(this)}>LogOut</Button>
              </Toolbar>
            </AppBar>
          </div>
        )
    }
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
  };
  
const connectedLogoutPage = connect(null, actionCreators)(Logout)
export default withStyles(styles)(connectedLogoutPage);