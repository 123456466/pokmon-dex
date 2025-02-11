import React from "react";
import { useNavigate } from "react-router-dom";
import MainBox from "../style/home/HomeStyle";
import StartBtn from "../style/home/StartBtnStyle";

const ShowHome = () => {
  const navigate = useNavigate();

  return (
    <MainBox>
      <img src="src/img/pokemon_logo.png" />
      <StartBtn
        onClick={() => {
          navigate("/Dex");
        }}
      >
        시작하기
      </StartBtn>
    </MainBox>
  );
};

export default ShowHome;
