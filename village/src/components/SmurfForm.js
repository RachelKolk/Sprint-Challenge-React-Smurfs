import React from 'react';

import styled from "styled-components";

const SmurfFormContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 4%;
`;

const FormInput = styled.input`
    line-height: 2.5rem;
    width: 350px;
    margin: 4%;
    border-radius: 4px;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    text-align: center;
`;

const SubmitButton = styled.button`
    line-height: 2rem;
    background-color: blue;
    color: white;
    width: 150px;
    border-radius: 4px;
    margin-left: 30%;
    text-align: center;
    margin-left: 61%;
`;



  function SmurfForm(props) {

 
    return (
      <SmurfFormContainer>
          <form onSubmit={props.addSmurf}>
            <FormInput
              onChange={props.handleInputChanges}
              placeholder="name"
              type="text"
              value={props.smurf.name}
              name="name"
            />  
            
            <FormInput
              onChange={props.handleInputChanges}
              placeholder="age"
              type="number"
              value={props.smurf.age}
              name="age"
            />

            <FormInput
              onChange={props.handleInputChanges}
              placeholder="height"
              type="number"
              value={props.smurf.height}
              name="height"
            />
            <SubmitButton type="submit">Add to the village</SubmitButton>
        </form>
      </SmurfFormContainer>
    );
  }


export default SmurfForm;
