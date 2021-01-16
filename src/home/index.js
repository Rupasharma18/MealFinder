import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { connect } from "react-redux";
import { userActions } from "../actions"
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Card } from "@material-ui/core";
import CardHeader from '@material-ui/core/CardHeader';
import Search from "../search";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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
        paddingBottom:"15px"
    },
    btn: {
        backgroundColor: "#c52d2f !important",
        color: "white",
    },
    mainC: {
        paddingBottom: "40px"
    },
  
})
class Home extends React.Component {
    constructor(props) {
        super(props)

    }



    render() {
        const { classes } = this.props
        const mealDatas = this.props.ownState.ApiData.meal;
        const NotFound = this.props.ownState.ApiData.NotFound;
        const pendng = this.props.ownState.ApiData.pending
        console.log(mealDatas, NotFound,pendng, "meall")
        return (
            <div>
                <Search />
                <Container component="main" maxWidth="lg" className={classes.mainC}>

                    {NotFound ? <h1 style={{textAlign:"center", }}>Meal is not Found.</h1> :
                        <div className={classes.paper}>
                            <Grid container spacing={3} justifyContent="center">
                                {mealDatas.map((item, i) => (
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
                                            {/* //  <CardContent> */}
                                            {/* <Typography variant="body2" color="textSecondary" component="p">
                   <span style={{fontSize:"20px", color:"black"}}>Instructions</span> :{item.strInstructions}
                     </Typography> */}


                                            {/* </CardContent> */}

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



                </Container>


            </div>
        )
    }
}

const APiAction = {
    CallApI: userActions.CallApI
}
function mapStatetoProps(ownState) {
    console.log(ownState, "own ++++")
    return { ownState }
}
const connectedHomePage = connect(mapStatetoProps, APiAction)(Home)
export default withStyles(styles)(connectedHomePage);