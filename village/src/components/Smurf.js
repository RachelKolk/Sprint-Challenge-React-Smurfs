import React from 'react';

import styled from 'styled-components';

const SmurfCard = styled.div`
  border: 3px dotted blue;
  border-radius: 5px;
  display: flex;
  width: 40%;
  text-align: center
`;

const SmurfInfo = styled.div`
  font-family: 'Quicksand', sans-serif;
  margin: 0 auto;
  padding-bottom: 4%;
  
`;

const Smurf = props => {
  return (
    <SmurfCard>
      <SmurfInfo>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      {/* <button>Delete Smurf</button> */}
      </SmurfInfo>
    </SmurfCard>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: '',
  
};

export default Smurf;

