import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { connect } from "react-redux";
import { userActions } from "../actions"
import Grid from '@material-ui/core/Grid';
import { Card } from "@material-ui/core";
import CardHeader from '@material-ui/core/CardHeader';
import Search from "../search";
import CardMedia from '@material-ui/core/CardMedia';


const styles = () => ({
    root: {
        flexGrow: 1,
        maxWidth: 345,
        // height: "320px",
        backgroundColor: "wheat !important",

    },
    paper: {
        display: 'flex',
        // justifyContain:"center",
        marginTop: "50px",
        alignItems: 'center',
    },
    media: {
        height: 0,
        padding: '26%', // 16:9

    },
    link: {
        float: "right",
        marginTop: "8px",
        textDecoration: "none !important",
        paddingRight: "100px",
        paddingBottom:"15px",

    },
    btn: {
        backgroundColor: "#c52d2f !important",
        color: "white",
    },
    mainC: {
        paddingBottom: "40px",

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

 
})
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            letter:["A", "B", "C", "D", "E","F","G","H", "I","J", "K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
      
        }
      
    }

    render() {
        const { classes } = this.props
        console.log(this.props)
        const mealDatas = this.props.ownState.ApiData.meal;
        const NotFound = this.props.ownState.ApiData.NotFound;
        const pending = this.props.ownState.ApiData.pending;
        const filterMeals = this.props.ownState.IngredientReducer.ingredientState.meals;
        console.log(filterMeals,"filtere")
        return (
            <div>
                <Search />
                <Container component="main" maxWidth="lg" className={classes.mainC}>
                {!!filterMeals&&filterMeals.length>0? <h1 style={{textAlign:"center", fontFamily:"monospace" }}>Filter Meals</h1>:""}
                {pending ?  <h1 style={{textAlign:"center", }}>Loading........</h1> : <div>
                {NotFound ? <h1 style={{textAlign:"center", }}>Meal is not Found.</h1> :
                    <div className={classes.paper}>
                            <Grid container spacing={3} justifyContent="center">
                                {(!!filterMeals&&filterMeals.length>0? filterMeals:mealDatas).map((item, i)  => (
                                    <Grid item sm={4} key={i}>
                                       
                                        <Card className={classes.root}>
                                            <CardHeader
                                                title={item.strMeal}
                                                subheader={item.strTags}
                                            
                                            />
                                            <CardMedia
                                                className={classes.media}
                                                image={item.strMealThumb}
                                                title={item.strMeal}
                                            />
                            
                                            <a href={item.strYoutube} className={classes.link}>
                                                <Button
                                                    variant="contained"
                                                    className={classes.btn}
                                                    
                                                >More Details
                                                 </Button>
                                            </a>
                                        </Card>
                                    </Grid>

                                ))}
                            </Grid>
                        </div>}
                  </div>}
                   
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
    CallApI: userActions.CallApI,
    LetterApi:userActions.LetterApi
}
function mapStatetoProps(ownState) {
    return { ownState }
}
const connectedHomePage = connect(mapStatetoProps, APiAction)(Home)
export default withStyles(styles)(connectedHomePage);