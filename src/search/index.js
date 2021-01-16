import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {connect} from "react-redux";
import {userActions} from "../actions"
import AppBar from "../appbar";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Card } from "@material-ui/core";
import CardHeader from '@material-ui/core/CardHeader';
import "../App.css"
const styles =() => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: 'flex',
    // justifyContain:"center",
    margin:'auto',
    alignItems: 'center',
  },
  form: {
    width: '100%', 
  },
  searchBtn:{
    float: "right",
    marginTop:" 15px !important",
    backgroundColor:" black !important",
    width: "15%",
    height: "50px",
    "&:hover":{
      backgroundColor:"black !important",
      
    }
  },
  input:{
    width:"83% !important"
  }
})
class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchInput:"",
            loading:true
        }
    }

    handleInputChange(e){
        e.preventDefault();
      
        this.setState({
            searchInput:e.target.value
        })
   
    }
    handleSubmit(e){
        e.preventDefault();
        const inputName = this.state.searchInput;
        this.props.CallApI(inputName)
    }

render(){
        const {classes} =this.props 
      console.log(this.state.searchInput, "input+")
    return (
        <div>
            <AppBar/>
            <Container component="main" maxWidth="md">
            <div className={classes.paper}>
            <form className={classes.form} noValidate onSubmit={this.handleSubmit.bind(this)}>
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="search"
                autoComplete="search"
                placeholder="search meal.."
                autoFocus
               defaultValue={this.state.searchInput}
               onChange={this.handleInputChange.bind(this)}
               className={classes.input}
             />
                <Button 
                type="submit"
                variant="contained"
                color="primary"
                className ={classes.searchBtn}
               
                > 
                search
                </Button>
            </form>
            </div>

            </Container>


          </div>
        )
    }
}

const APiAction = {
    CallApI : userActions.CallApI
}
function mapStatetoProps(ownState){
   
  return {ownState}
}  
const connectedHomePage = connect(mapStatetoProps, APiAction)(Search)
export default withStyles(styles)(connectedHomePage);