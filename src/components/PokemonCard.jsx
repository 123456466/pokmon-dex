import React from "react";
import CardBox from "../style/PokemonCardStyle"

const PokemonCarde = ({ id, img_url, korean_name, getPokemon }) => {
    return <CardBox key={id} >
        <img src={img_url} />
        <p>{korean_name}</p>
        <button onClick={() => getPokemon(id)}>잡기</button>
    </CardBox>
}

export default PokemonCarde