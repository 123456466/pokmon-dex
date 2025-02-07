import React from "react";
import CardBox from "../style/PokemonCardStyle";

const PokemonCarde = ({
  id,
  img_url,
  korean_name,
  getPokemon,
  moveToDetail,
}) => {
  return (
    <CardBox key={id} onClick={() => {moveToDetail(id) }}>
      <img src={img_url} />
      <p>{korean_name}</p>
      <button className='get' onClick={(e) => { e.stopPropagation(); getPokemon(id)}}>잡기</button>
    </CardBox>
  );
};

export default PokemonCarde;