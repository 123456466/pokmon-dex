import React from "react";
import MyBag from "../style/dex/DashboardStyle.jsx";
import Ball from "../style/dex/Ball.jsx";
import BallsInBag from "../style/dex/BallsInBag.jsx";
import EntryPokemon from "../style/dex/EntryPokemonStyle.jsx";
import GlobalBtn from "../style/global/globalBtnStyle.jsx";
import MainFont from "../style/text/MainFont.jsx";

const Dashboard = ({ myPokemons, del, moveToDetail }) => {
  return (
    <MyBag>
      <MainFont>나의 포켓몬</MainFont>
      <BallsInBag>
        {myPokemons.map(({ id, get, name, img }) =>
          get ? (
            <EntryPokemon id={id} onClick={() => moveToDetail(id)}>
              <img src={img} />
              <p>{name}</p>
              <GlobalBtn
                onClick={(e) => {
                  e.stopPropagation();
                  del(id);
                }}
              >
                보내기
              </GlobalBtn>
            </EntryPokemon>
          ) : (
            <Ball src="src/img/포켓몬볼.png" />
          )
        )}
      </BallsInBag>
    </MyBag>
  );
};

export default Dashboard;
