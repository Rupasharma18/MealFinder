import { Container, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { userActions } from "../actions"
import { withStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
const style = ()=>({
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
})
class IngerdientMeal  extends React.Component{

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
                            <Typography variant="h4" className={classes.title}>
                                {name}
                            </Typography>

                         <img src={image} alt="image" style={{ width:"70%", paddingTop:"20%"}}/>
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
export default withStyles(style)(connectedPage);

