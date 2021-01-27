import React from "react";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {connect} from "react-redux";
import {userActions} from "../actions"
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { TextField } from "@material-ui/core";
import ListofS from "../SeletedList";

const styles =(theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    // padding: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  closeButton: {
    position: 'absolute !important',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


class Logout extends React.Component{
    constructor(props){
        super(props)
        this.state={
          open:false,
          categories:"",
          ingredients:"",
          area:""

      }
    }
logout(){
this.props.logout()
}


handleClickOpen = () => {
  this.setState({
    open:true
  })

};


handleClose = () => {
this.setState({
  open:false
})
};
componentDidMount(){
  this.props.AreaList();
  this.props.IngerditeList();
  this.props.CategoryList();
}
// handleChange(e){
//   e.preventDefault();
  
//   this.setState({
//     [e.target.name]:e.target.value,
//   })

// }

// handleCallAPis = (e)=>{
//      e.preventDefault();
//      const {categories, ingredients, area} = this.state;
//      this.props.FilterIngredient(ingredients,categories, area)
    
//   }

render(){
  const {classes} =this.props 
  console.log(this.state, "states")
  return (
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
              HOME 
          </Typography>
          <Button color="inherit" onClick={this.handleClickOpen}>Filter</Button>
          <Button color="inherit" onClick={this.logout.bind(this)}>LogOut</Button>
        </Toolbar>
      </AppBar>


    {/* popup */}
      <div>
    <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open}>
      <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
        Search food by Categories , Ingredients & Area
      </DialogTitle>
      <form noValidate>
      <DialogContent dividers>
        <ListofS popupclose={this.handleClose}/>
      </DialogContent>
      </form>
    
    </Dialog>
  </div>
  {/* finished popup */}
    </div>
        )
    }
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout,
    FilterIngredient: userActions.FilterIngredient,
    AreaList:userActions.AreaList,
    CategoryList:userActions.CategoryList,
    IngerditeList:userActions.IngerditeList
  };

  function mapStatetoProps(State) {
    console.log(State, "stateeeee ++++")
    return { State }
}
const connectedLogoutPage = connect(mapStatetoProps, actionCreators)(Logout)
export default withStyles(styles,  {withTheme: true })(connectedLogoutPage);