import React, { Component } from 'react';

import styled from 'styled-components';

import Smurf from './Smurf';

const SmurfsContainer = styled.div`
  text-align: center;
  
`;

const SmurfHeader = styled.h1`
  font-family: 'Baloo Thambi', cursive;
  background: blue;
  color: white;
  line-height: 5rem;
  font-size: 8.5rem; 
`;

class Smurfs extends Component {
  render() {
    return (
      <SmurfsContainer>
        <SmurfHeader>Smurf Village</SmurfHeader>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
              
            );
          })}
        </ul>
      </SmurfsContainer>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
