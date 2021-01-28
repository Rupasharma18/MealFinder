import { Container, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { userActions } from "../actions"
import { withStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// import { TextField } from "@material-ui/core";

const style = (theme)=>({
    main:{
        paddingTop:"40px"
    },
    title:{
        color:"white !important",
       fontSize:"1.5rem !important",
       overflowWrap: "break-word !important",
       width: "469px",
       textAlign:"center"

    
    },
    tit1:{
        color:"white !important",
        textAlign:"center !important",
        paddingBottom:"50px",
        fontSize:"1.5rem !important",
        textAlign:"center"
    },
    rightClass:{
        float:"right",
        display:"flex",
        width:"700px",
        flexWrap: "wrap",
        overflow:"auto !important"
    },
    textIngre:{
        color:"orange !important",
        fontSize:"13px !important",
        fontFamily:"monospace !important",
        textAlign:"center"
    },
    root: {
        margin: 0,
        padding: "20px",
   
      },
      closeButton: {
        position: 'absolute !important',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color:"grey !important",
      },
})

const DialogTitle = withStyles(style)((props) => {
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
      justifyContent:"center"
    },
  }))(MuiDialogContent);
  
  // const DialogActions = withStyles((theme) => ({
  //   root: {
  //     margin: 0,
  //     padding: theme.spacing(1),
  //   },
  // }))(MuiDialogActions);



class IngerdientMeal  extends React.Component{
    constructor(props){
        super(props)
        this.state={
            open:false
        }
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
    render(){  
      const {classes} = this.props;
        const name = this.props.ownState.IngredientNameReducer.ingredientNameState[2]
        const image = this.props.ownState.IngredientNameReducer.ingredientNameState[1]
        const meal =this.props.ownState.IngredientNameReducer.ingredientNameState[0].meals
        console.log(meal, "dsfshjgkkkkkkkk")
        return (
            <div>
    
                <Container component="main" maxWidth="lg" className={classes.main}>
                <Grid container spacing={8}>
                    <Grid item sm={6}>
                            <Typography variant="h4" className={classes.title} onClick={this.handleClickOpen}>
                                {name}
                            </Typography>

                         <img src={image} alt="image" style={{ width:"70%", paddingTop:"20%", opacity:1}}/>
                    </Grid>
                    <Grid item sm={6}>
                    <Typography variant="h4" className={classes.tit1}>
                        Meal

                    </Typography>
                        <Grid container spacing={3} className={classes.rightClass} justifyContent="center">
                         {meal !== null? meal.map((item, i)=>{
                            return(
                                <Grid item sm={4} >
                                    <div key={i}>
                                    <img src={item.strMealThumb} alt="image" width="100%"/>
                                    <Typography variant="h6" className={classes.textIngre} onClick={()=>{
                                    this.props.MealId(item.idMeal)
                                    }}>
                                             {item.strMeal}
                                    </Typography>
                                    </div>
                                  
                                </Grid>
                            
                            )
                        
                        }):  <Typography variant="h1" style={{textAlign:"center", color:"white"}}>Meal is not avaliable!!!!!!</Typography>}


                        </Grid>
                       
               
                    </Grid>

                </Grid>
           
                </Container>

                    <Container component="main" maxWidth="lg" justifyContent="center">

                    <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open} fullWidth={true} 
                        maxWidth = {'sm'}>
                        <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                        {name}'s Ingerdient Image
                        </DialogTitle>
                        <DialogContent dividers>
                            <img src={image} alt="image" style={{width:"100%", borderRadius:"5px", opacity:1}}/>
                        </DialogContent>
                    </Dialog>
                   
                    </Container>




            </div>
        )
    }
}



const APiAction = {
    CallApI : userActions.CallApI,
    MealId: userActions.MealId
}
function mapStatetoProps(ownState){
   
  return {ownState}
}  
const connectedPage = connect(mapStatetoProps, APiAction)(IngerdientMeal)
export default withStyles(style, {withTheme: true })(connectedPage);

