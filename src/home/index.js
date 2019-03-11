import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {detailsAction} from './actions';

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      nameInput: '',
      ageInput: ''
    };
    this.onDoneClick = this.onDoneClick.bind(this);
  }

  onDoneClick = () => {
    let {nameInput, ageInput} = this.state;
    this.props.detailsAction({nameInput, ageInput});
  }

  render(){
    return(
      <div>
      This is the home Component.
      <div>
      <label>Name</label>
      <input value={this.state.nameInput} onChange={(e) => {this.setState({nameInput: e.target.value})}}/>
      </div>
      <div>
      <label>Age</label>
      <input value={this.state.ageInput} onChange={(e) => {this.setState({ageInput: e.target.value})}}/>
      </div>
      <div>
      <button onClick={this.onDoneClick}>Done</button>
      <button onClick={() => {this.props.history.push('/details')}}>Go to details page</button>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    name: state.name,
    age: state.age,
    gender: state.gender
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    detailsAction: (obj) => dispatch(detailsAction(obj))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
