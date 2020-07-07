import React, { Component } from "react";
import {testData,SubmitCountryName,SeverData} from "./practice/actions/ScoreAction";
import {  Row,Container} from "react-bootstrap";
import { connect } from "react-redux";


class App extends Component {
    constructor(props) {
        super(props);
          this.state ={
                Average_score: null,
                CountryName:null,
                TypeOfScore:null,
          };
        this.onChangehandlerTestData = this.onChangehandlerTestData.bind(this);
        this.onchangeCountryName=this.onchangeCountryName.bind(this);
        this.submithandler=this.submithandler.bind(this);
        this.onChangehandlerServerData = this.onChangehandlerServerData.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(testData());
    }

    // fetcthing Test Data
    onChangehandlerTestData = (event) => {
        this.props.dispatch(testData());
        this.setState({
          TypeOfScore:event.target.value
        })
    }

    // fetcthing Server Data
    onChangehandlerServerData = (event) => {
        this.setState({
          TypeOfScore:event.target.value
        })
        this.props.dispatch(SeverData());
    }

    onchangeCountryName = (event) => {
        this.setState({
            CountryName:event.target.value
        })
      }

     submithandler = (event) => {
         event.preventDefault();
         var CountryName=this.state.CountryName;
         var TypeOfScore=this.state.TypeOfScore;
         this.props.dispatch(SubmitCountryName({CountryName,TypeOfScore}));
      }
    
    render() {  
     
          var Data = this.props.Datafetch;
          // console.log("ViewData",Data);

          if(Data.AverageScore===0){
             var AverageScore = "-"
          }
          else{
             AverageScore=Data.AverageScore
          }
          if(Data.BarWidth===0){
             var BarWidth = ""
          }
          else{
            BarWidth=Data.BarWidth
          }

        return (
            <div>
              <Container fluid={true}>
                    <Row>
                        <form>
                            Source of data :&nbsp;&nbsp; 
                            <input id="src-test" type="radio" name="data-source" value="test" defaultChecked onChange={this.onChangehandlerTestData} />  
                            <label htmlFor="src-local">Test Data</label>
                            &nbsp;&nbsp;
                            <input id="src-server" type="radio" name="data-source" value="server" onChange={this.onChangehandlerServerData}/>  
                            <label htmlFor="src-server">Server Data</label>
                         </form>
                      </Row>
                      <Row>
                        <div className="country">
                            <form onSubmit={this.submithandler}>
                              The Country: &nbsp;&nbsp;
                                 <input className="country-input" type="text" onChange={this.onchangeCountryName} value={this.countryName}/> <input type="submit" value="Submit"/> 
                            </form>
                            </div>
                            <div className="average">
                            The Average: {AverageScore}
                            </div>
                            <div className="horiz-bar" style={{width: Data.BarWidth}}>&nbsp; </div>
                       </Row>
               </Container>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        Datafetch: state.DataFetch
    };
};
export default connect(mapStateToProps)(App);
