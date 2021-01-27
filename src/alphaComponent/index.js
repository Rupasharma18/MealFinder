import React from "react";
import Grid from '@material-ui/core/Grid';
import { Card } from "@material-ui/core";
import CardHeader from '@material-ui/core/CardHeader';
import Search from "../search";
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { connect } from "react-redux";
import { userActions } from "../actions"


const style= ()=>({
    media: {
        height: 0,
        padding: '26%',
        height:"120px"

    },
    root: {
        flexGrow: 1,
        maxWidth: 345,
        padding:"35px",
        backgroundColor: "#331800 !important",

        fontSize:"1.3rem !important"

    },
    title:{
        textAlign:"center !important",
       color:"orange !important",
       padding:"0 0 0 0 !important",
     
        
    },
    pagination:{
        display:"flex",
        padding: "40px",
        justifyContent: "center",
        
    },
    line:{
        color:"white !important"
    },
})

class alphaComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            letter:["A", "B", "C", "D", "E","F","G","H", "I","J", "K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        }
    }
    
   
    render(){
        const Meal = this.props.ownState.letterState.letterData.meals
        const {classes} = this.props
        console.log(Meal, "meal ")
     
        
        return (
            <div>
                 <Container component="main" maxWidth="lg" >
                    <h1 style={{textAlign:"center", color:"white"}}>Meal By Letter</h1>
                            <Grid container spacing={3} justifyContent="center">
                                {Meal === null || Meal === undefined? <h1 style={{textAlign:"center", fontFamily:"monospace", color:"white"}}>Meal is not avaliable!!</h1>:
                                Meal.map((item, i) =>(
                                    <Grid item sm={4} key={i}>
                                        <Card className={classes.root}>
                                            <CardMedia 
                                            image={item.strMealThumb}
                                            title={item.strMeal}
                                            className={classes.media}
                                            />

                                          <CardHeader
                                                title={item.strMeal}
                                                className={classes.title}
                                                onClick={()=>(
                                                    this.props.MealId(item.idMeal)
                                                )}
                                            />
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                 </Container>


                <Container component="main" maxWidth="md" style={{marginTop:"10px"}}>
                    <div className={classes.pagination}>
                    {this.state.letter.map((item, i)=> (
                    <h2 style={{color:"#c52d2f"}}  onClick={()=>{
                        this.props.LetterApi(item)
                        }}>
                             {item}
                  
                       <span className={classes.line} >|</span>
                 </h2>
                )
               )}   
                    </div>
                            
            </Container>
            </div>
        )
    }
}
const APiAction = {
    LetterApi:userActions.LetterApi,
    CallApI:userActions.CallApI,
    MealId:userActions.MealId

}
function mapStatetoProps(ownState) {
    return { ownState }
}
const connectedPage = connect(mapStatetoProps, APiAction)(alphaComponent)
export default withStyles(style)(connectedPage);