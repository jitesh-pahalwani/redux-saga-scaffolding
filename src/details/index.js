import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import {detailsAction} from './actions';

class Details extends Component {
  constructor(props){
    super(props);
    this.state={
      stringInput: ''
    };
    this.onFetchClick = this.onFetchClick.bind(this);
  }

  onFetchClick = () => {
    this.props.detailsAction(this.state.stringInput);
  }

  render(){
    return(
      <div>
      Here are your details
      <div>
      Your name is {this.props.name} and you are {this.props.age} years old.
      </div>
      <div>Enter a string input</div>
      <input value={this.state.stringInput} onChange={(e) => {this.setState({stringInput: e.target.value})}}/>
      <button onClick={this.onFetchClick}>Fetch</button>
      <div>{this.props.someResponse}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    name: state.homeReducer.name,
    age: state.homeReducer.age,
    gender: state.homeReducer.gender,
    someResponse: state.detailsReducer.someResponse
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    detailsAction: (obj) => dispatch(detailsAction(obj))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Details))
