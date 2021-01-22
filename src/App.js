import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8")
      .then((res) => {
        setCharacters(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("err detected");
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map((character) => {
        return <Character key={character.id} character={character} />;
      })}
    </div>
  );
};

export default App;
