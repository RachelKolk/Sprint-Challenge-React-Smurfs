import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';

import axios from 'axios';


import './App.css';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: {
        id: '',
        name: '',
        age: '',
        height: '',
      }
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res.data);
      this.setState({
        smurfs: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  addSmurf = () => {
    axios.post("http://localhost:3333/smurfs", this.state.smurf)
      .then(res => {
        console.log('adding smurf');
        this.setState({smurfs:res.data});
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  }

  handleInputChanges = e => {
    e.persist();
    this.setState(prevState => {
      return {
        smurf: {
          ...prevState.smurf,
          [e.target.name]: e.target.value
        }
      }
    });
  };

  // deleteSmurf = (e, smurfId) => {
  //   e.preventDefault();
  //   axios
  //     .delete(`http://localhost:3333/smurfs/${smurfId}`)
  //     .then(res => {
  //       this.setState({smurfs:res.data})
  //       // this.props.history.push('/');
  //     })
  // }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">

        <div className="NavBar">
        <NavLink className="topLinks" to="/">Smurf Village</NavLink>
        <NavLink className="topLinks" to="/smurf-form">Add Smurf</NavLink>

        </div>

        
        
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm 
              {...props}
              smurf={this.state.smurf}
              addSmurf={this.addSmurf}
              handleInputChanges={this.handleInputChanges}
            />
          )}
        />


        <Route
          exact path="/"
          render={props => (
            <Smurfs 
              {...props}
              smurfs={this.state.smurfs} 
              // deleteSmurf={this.deleteSmurf}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
