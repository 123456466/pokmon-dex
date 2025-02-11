import React from "react";
import CardBox from "../style/dex/PokemonCardStyle";
import GlobalBtn from "../style/global/globalBtnStyle";

const PokemonCarde = ({
  id,
  img_url,
  korean_name,
  getPokemon,
  moveToDetail,
}) => {
  return (
    <CardBox
      key={id}
      onClick={() => {
        moveToDetail(id);
      }}
    >
      <img src={img_url} />
      <p>{korean_name}</p>
      <GlobalBtn
        onClick={(e) => {
          e.stopPropagation();
          getPokemon(id);
        }}
      >
        잡기
      </GlobalBtn>
    </CardBox>
  );
};

export default PokemonCarde;
