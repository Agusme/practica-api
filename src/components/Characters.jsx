/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {Container} from 'react-bootstrap';
import axios from 'axios';
import { useParams } from "react-router-dom";


const Characters = () => {

const [character, setCharacter] = useState(null);

const params = useParams();

const oneCharacter = async(id)=>{
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)

setCharacter(peticion.data)
}
useEffect(()=>{
    oneCharacter(params.id , setCharacter)
}, [])

  return (
<Container>
{character !== null ? (
    <div>
            <h1>Characters with a Id {params.id} </h1>
    <p> NAME {character.name} </p>

<img src={character.image} alt="" />

    </div>
    
): ('there arent some characters')}
</Container>
  )
};

export default Characters;
