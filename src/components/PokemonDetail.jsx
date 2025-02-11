import React from "react";
import GlobalBtn from "../style/global/globalBtnStyle";
import DetailBox from "../style/modal/PokemonDetailBoxStyle";

const Detail = ({ back, img_url, name, types, description }) => {
  return (
    <DetailBox>
      <img src={img_url} />
      <p>{name}</p>
      <p>{types}</p>
      <p>{description}</p>
      <GlobalBtn onClick={() => back()}>돌아가기</GlobalBtn>
    </DetailBox>
  );
};

export default Detail;
