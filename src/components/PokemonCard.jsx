import React from "react";
import CardBox from "../style/PokemonCard"

const PokemonCarde = ({id,img_url,korean_name}) => {
    return <CardBox key={id}>
        <img src={img_url} />
        <p>{korean_name}</p>
    </CardBox>
}

export default PokemonCarde