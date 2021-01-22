import React from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledWrapper = styled.div`
  color: blue;
  button {
    color: red;
    background-color: black;
  }
  .buttonDiv {
    width: 100%;
    padding: 50px 0;
    text-align: center;
    background-color: white;
    margin-top: 20px;
  }
`;

export default function Character(props) {
  const { character } = props;

  return (
    <StyledWrapper Id="character-info">
      <h2>{character.name}</h2>
      <img src={character.image} alt="Rick and Morty character" />
      <Button />
      <div className="buttonDiv">
        <p>Gender: {character.gender}</p>
        <p>Location: {character.location.name}</p>
        <p>Species: {character.species}</p>
        <p>Status: {character.status}</p>
        <p>Created: {character.created}</p>
      </div>
    </StyledWrapper>
  );
}
