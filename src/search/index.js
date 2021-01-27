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
// import "../App.css"
import {history}  from '../helper';
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
    backgroundColor:"#23180d !important",
    width: "15%",
    height: "50px",
    "&:hover":{
      backgroundColor:"#23180d !important",
      
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
            loading:true,
            error:{
              input:""
            }
        }
    }

handleInputChange(e){
  e.preventDefault();
  if(e.target.value !== ""){
    this.setState({
      searchInput:e.target.value
  })
  }
  else{
    this.props.ownState.ApiData.NotFound = false;
    this.props.CallApI(e.target.value)
    }
}
    
    handleSubmit(e){
        e.preventDefault();
          const inputName = this.state.searchInput;
          this.props.ownState.IngredientReducer.ingredientState.meals=null;
          this.props.CallApI(inputName)
    

    }

    componentDidMount(e){
      if(history.location.pathname === "/home"){
        this.props.CallApI( this.state.searchInput)
      }

 
    }

render(){
    const {classes} =this.props    
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
              //  disabled = {!this.state.searchInput}
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