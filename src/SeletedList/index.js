
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import {connect} from "react-redux";
import {userActions} from "../actions";
import Button from '@material-ui/core/Button';
class SelectedList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            open:false,
            loadingC:false,
            openI:false,
            loadingI:false,
            openArea:false,
            loadingArea:false,
            Area:[],
            Category :[],
            Ingerdite:[],
            filterCategory:'',
            filterIngerdient:"",
            filterArea:""
        }
    }
    componentDidMount(){
    const cate = this.props.State.listOfCategory.category.meals;
    const area= this.props.State.AreaOfList.area.meals;
    const ingerditent= this.props.State.listOfIngredients.Ingredients.meals.map((item, i)=>{
        //console.log(i, "+++++++++++")
     return item.strIngredient
    })

    console.log(cate,"catee")
    this.setState({
        Category:cate
    })
  
    this.setState({
        Area:area
    })
   this.setState({
            Ingerdite:ingerditent
        })
 
    }

    handleCallAPis (e){
        e.preventDefault();
        const {filterCategory, filterIngerdient, filterArea} = this.state;
        console.log(this.state, "staterwtetfs")
        this.props.FilterIngredient(filterCategory,filterIngerdient,filterArea)
        // debugger
       this.props.popupclose()

     }
    render() {
        console.log(this.state.filterCategory, this.state.filterIngerdient,this.state.filterArea, "++++++++++=")
        return (
            <div>
                <Typography component="h6" variant="h6">
                    Category*
                </Typography>
                <Autocomplete
                    id="asynchronous-demo"
                    open={this.state.open}

                    onOpen={() => {
                        this.setState({open:true})
                      }}
                      onClose={() => {
                        this.setState({open:false})
                      }}

                    getOptionSelected={(Category, value) => Category.strCategory === value.strCategory}
                    getOptionLabel={(category) =>category.strCategory}
                    options={this.state.Category}
                    onChange={(category, value) => this.setState({filterCategory: value.strCategory})}
                    renderInput={(params) => (

                        <TextField
                            {...params}
                             variant="outlined"
                          
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <React.Fragment>
                                        {this.state.loadingC ? <CircularProgress color="inherit" size={20} /> : null}
                                      {params.InputProps.endAdornment}
                                    </React.Fragment>
                                ),
                            }}
                        />
                    )}
                />


                <Typography component="h6" variant="h6">
                    Ingerdients*
                 </Typography>
                <Autocomplete
                    id="asynchronous-demo1"

                      open={this.state.openI}
                      onOpen={() => {
                        this.setState({openI:true})
                      }}
                      onClose={() => {
                        this.setState({openI:false})
                      }}

                      getOptionSelected={(inge, value) => inge=== value}
                      getOptionLabel={(inge) => inge}
                      options={this.state.Ingerdite}
                   onChange={(e, value)=>{this.setState({filterIngerdient:value})}}
                    renderInput={(params) => (
                        <TextField
                              {...params}
                   
                            variant="outlined"
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <React.Fragment>
                                        {this.state.loadingI ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                    </React.Fragment>
                                ),
                            }}
                        />
                    )}
                />

                <Typography component="h6" variant="h6">
                    Area*
                </Typography>

                <Autocomplete
                    id="asynchronous-demo2"

                      open={this.state.openArea}
                      onOpen={() => {
                        this.setState({openArea:true})
                      }}
                      onClose={() => {
                        this.setState({openArea:false})
                      }}
                      getOptionSelected={(area, value) => area.strArea === value.strArea}
                      getOptionLabel={(area) => area.strArea}
                      options={this.state.Area}
                      onChange={(e, value)=>{this.setState({filterArea:value.strArea})}}
                    renderInput={(params) => (
                        <TextField
                              {...params}
                         
                            variant="outlined"
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <React.Fragment>
                                        {this.state.loadingArea ? <CircularProgress color="inherit" size={20} /> : null}
                                         {params.InputProps.endAdornment}
                                    </React.Fragment>
                                ),
                            }}
                        />
                    )}
                />


        <Button autoFocus 
          type="submit"
          variant="contained"
          color="primary"
          onClick={this.handleCallAPis.bind(this)}
          style={{float:"right", marginTop:"10px"}}
      >
            Submit
        </Button>
            </div>
        );
    }

}
const actionCreators = {
    FilterIngredient: userActions.FilterIngredient,

  };
function mapStatetoProps(State) {
    console.log(State, "list ++++")
    return { State }
}
const connectedLogoutPage = connect(mapStatetoProps, actionCreators)(SelectedList)
export default connectedLogoutPage;


