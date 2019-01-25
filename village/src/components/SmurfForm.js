import React from 'react';



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
