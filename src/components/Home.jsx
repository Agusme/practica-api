import React, { useEffect, useState } from "react";
import {Container} from 'react-bootstrap'
import axios from 'axios';
const Home = () => {
    const [characters, setCharacters] = useState(null);

    const AllCharacters = async () => {
      const peticion = await axios.get(
       'https://rickandmortyapi.com/api/character'
      );
      setCharacters(peticion.data.results)
    };
  

    
    useEffect(() => {
      AllCharacters(setCharacters);
    }, []);
    return (
        <Container>
        <h1>Home</h1>
        {characters !== null
          ? characters.map((character) => (
              <div key={character.id}>
                <a href={`/characters/${character.id}`}>{character.name} </a>
              </div>
            ))
          : "there arent characters"}
      </Container>
    );
};

export default Home;