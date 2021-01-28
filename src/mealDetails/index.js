import React from "react";
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { connect } from "react-redux";
import { userActions } from "../actions"
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Grid } from "@material-ui/core";
import ArrowRight from "./arrowRight.png";
import ArrowLeft from "./arrowLeft.png";
const style = ()=>({
main:{
    paddingTop:"40px"
},
leftClass:{
    float:"left",
    textAlign:"center"
},
title:{
    color:"white !important",
   fontSize:"1.5rem !important",
   overflowWrap: "break-word !important",
   width: "469px"

},
tit1:{
    color:"white !important",
    textAlign:"center !important",
    paddingBottom:"50px",
    fontSize:"1.5rem !important"
},
image:{
    borderRadius:"5%",
    marginTop:"10%",

},
subtags:{
    textAlign:"center",
    marginTop:"2%",
    color:"orange !important",
    fontSize:"18px !important",
    fontFamily:"monospace !important",
    overflowWrap: "break-word !important",
    "&:hover":{
        color:"#d57d1f !important",
    },
    width: "324px",
    marginLeft: "85px !important"
},

bottomClass:{
    color:"#fff !important",
    textAlign:'center',
    fontFamily: "font-family: 'Open Sans', sans-serif !important",
    margin:" 0 auto",
    paddingBottom:"30px",
    lineHeight: "1.4 !important",
   

},
heading:{
    paddingBottom:'30px',
    fontFamily:'bold !important'
},
arrowLeft:{
    color:"#c52d2f !important",
fontSize:"200px",
width: "90px"
},
arrowRight:{
    color:"#c52d2f !important",
    fontSize:"200px",
    width: "90px"

},
pagination:{
    display:"flex",
    padding: "40px",
    justifyContent: "center",
    fontFamily: "monospace"
    
},
line:{
    color:"white !important"
},
textIngre:{
    textAlign:"center",
    marginTop:"2%",
    color:"orange !important",
    fontSize:"18px !important",
    fontFamily:"monospace !important",
},


})

class MealDetail extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            letter:["A", "B", "C", "D", "E","F","G","H", "I","J", "K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
         count : 1   
        }
    }

    render(){
        const {classes} = this.props
        const meal = this.props.ownState.MealidReducers.MealIdData.meals;
        console.log(meal, "meal++")
        const item1 = meal !== null? meal[0] || meal !== undefined:  <h1  style={{textAlign:"center", color:"white"}}>meal is not avaliable!</h1>
        let count=0
        return (
            <div>
                <Container component="main" maxWidth="lg" className={classes.main}>
                    {meal === null? <h1 style={{textAlign:"center", color:"white"}}>meal is not avaliable!</h1>: meal.map((item, i)=>{
                        return (
                        <div key={i} >
                            <Grid container spacing={3}>
                                <Grid item sm={6}>
                                    <div className={classes.leftClass}>
                                    <Typography variant="h5" className={classes.title}>
                                        {item.strMeal}
                                    </Typography>
                                        <img src={item.strMealThumb} className={classes.image} height="500px" width="500px"/>
                                        <Typography variant="h5" className={classes.subtags}>{item.strTags}</Typography>
                                    <img src={ArrowLeft} style={{width:"80px", paddingTop:"5px"}}  onClick={()=>{this.props.MealId(item.idMeal-1)}}/> 
                                    <img src={ArrowRight} style={{width:"80px", paddingTop:"5px"}} onClick={()=>{ this.props.MealId(parseInt(item.idMeal)+1)
                            
                                    }}/>
                            </div>
                                </Grid>


                                <Grid item sm={6}>
                                                    
                                    <div >
                                    <Typography variant="h4" className={classes.tit1}>
                                        Ingredients
                                        </Typography>
                                    <Grid container spacing={3} >
                                    {Object.keys(item1).map((key,i) => {
                                    
                                        if( key.includes(`strIngredient${count+1}`)){
                                                count++
                                                const image = `https://www.themealdb.com/images/ingredients/${item[key]}.png`
                                            return ( 
                                            <Grid item sm={4}>
                                                <div>
                                                    {item[key] === "" || item[key] === null? "": <img 
                                                    src={`https://www.themealdb.com/images/ingredients/${item[key]}.png`} 
                                                    style={{width: "100%"}}/>}
                                                    <Typography variant="h5" className={classes.textIngre} onClick={()=>{
                                                    this.props.Ingreditent(item[key], image)
                                              
                                                    }}>
                                                        {item[key]}
                                                    </Typography>

                                                </div>
                                            </Grid>
                                            )}
                            
                                        })}

                                        </Grid>

                                        </div>
                                </Grid>


                                <Grid item sm={12}>
                                <div  className={classes.bottomClass}>
                                        <Typography variant="h3" className={classes.heading}>
                                                Instructions
                                        </Typography>
                                        <Typography variant="p" component="p" style={{ whiteSpace: "pre-line", textAlign:"center", padding: "0 100px 0px 100px"}}>
                                            {item.strInstructions}
                                        </Typography>
                                    </div>
                                    </Grid>
                            </Grid>


                    </div>
                    
                    )})
}

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
function mapStatetoProps(ownState) {
    return { ownState }
}
const APiAction = {
    CallApI: userActions.CallApI,
    LetterApi:userActions.LetterApi,
    MealId:userActions.MealId,
    Ingreditent:userActions.Ingreditent
}
const connectpage = connect(mapStatetoProps, APiAction)(MealDetail)

export default withStyles(style)(connectpage);





















