import React, { Component } from 'react';
import axios from 'axios';


// class SmurfForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       smurf: {
//       id: '',
//       name: '',
//       age: '',
//       height: ''
//       }
//     };
//   }

  // addSmurf = event => {
  //   event.preventDefault();
  //   // add code to create the smurf using the api

  //   this.setState({
  //     name: '',
  //     age: '',
  //     height: ''
  //   });
  // }

  // handleInputChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

    // handleInputChanges = e => {
    //   e.persist();
    //   this.setState(prevState => {
    //     return {
    //       smurf: {
    //         ...prevState.smurf,
    //         [e.target.name]: e.target.value
    //       }
    //     }
    //   });
    // };

    // addSmurf = (e) => {
    //   e.preventDefault();      
    //   axios.post("http://localhost:3333/smurfs", this.state.smurf)
    //     .then(res => {
    //       console.log('adding smurf');
    //       // this.setState({smurfs:res.data});
    //       this.setState({
    //         name: '',
    //         age:'',
    //         height:'',
    //       });
    //     })
    //     .catch(err => console.log(err));
    // }

  function SmurfForm(props) {

  

  
  
    return (
      <div className="SmurfForm">
        <form onSubmit={props.addSmurf}>
          <input
            onChange={props.handleInputChanges}
            placeholder="name"
            // type="text"
            value={props.smurf.name}
            name="name"
          />
          <input
            onChange={props.handleInputChanges}
            placeholder="age"
            // type="number"
            value={props.smurf.age}
            name="age"
          />
          <input
            onChange={props.handleInputChanges}
            placeholder="height"
            // type="number"
            value={props.smurf.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }


export default SmurfForm;
