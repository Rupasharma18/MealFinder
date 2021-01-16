import React from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import { connect } from 'react-redux';
import {userActions} from '../actions' ;


const styles = theme => ({
    paper: {
      marginTop: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', 
      marginTop: "5px",
    },
    cardstyle:{ width:"100%", marginTop: "20%", padding:"30px"},
    
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor:"black !important",
      "&:hover":{
        backgroundColor:"black !important",
      }
    },
  });

class Login extends React.Component{
 constructor(props){
     super(props)
     this.state = {
         email: "", 
         password: "",
         error:{
             email:"",
             password:''
         }
     }
 }
handleChange(e){
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.error;
   const validPassword = RegExp(/^[0-9A-Za-z]{4,9}$/i)
    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    switch (name) {
        case "email":
            errors.email =  validEmailRegex.test(value)? "" :"Email is not valid."
            break;
        case "password": 
            errors.password = validPassword.test(value) ? "": "enter valid password."
            break
        default:
            break;
    }
    this.setState({
        errors,
        [name] : value
     })
}
handleSubmit(e){
    e.preventDefault();

    console.log(this.state,"ggg")
    if(this.state.email.length>0 && this.state.password.length>0){
        this.props.login(this.state.email, this.state.password)
    }
    else{
      return(alert("please fill the fields."))
    }
   
    
}

render(){
const {classes} = this.props
console.log(this.props.state.usersLogin.error)
return (
    <Container component="main" maxWidth="md">
    <CssBaseline />
    <Card className={classes.cardstyle}>
    <div className={classes.paper}>
      <Typography component="h1" variant="h4">
        Log In
      </Typography>
      <form className={classes.form} onSubmit={this.handleSubmit.bind(this)} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          defaultValue = {this.state.email}
          onChange = {this.handleChange.bind(this)}
        />
        <span style={{color:"red"}}>{this.state.error.email}</span>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange = {this.handleChange.bind(this)}
          defaultValue = {this.state.password}
        />
        <span style={{color:"red"}}>{this.state.error.password}</span>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Log In
        </Button>
        {this.props.loggedIn && this.props.state.usersLogin.error === undefined ? "": <span style={{color:"red", fontSize:"20px"}}>{this.props.state.usersLogin.error}</span> } 
      </form>
    </div>
  </Card>
 
  </Container>
)
    }
} 

function mapState(state) {
  console.log(state, "+++++++")
  const {loggedIn} = state.usersLogin
  console.log({loggedIn}, "ll")
  return {loggedIn, state } ;
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(Login)
export default withStyles(styles, { withTheme: true })(connectedLoginPage);


