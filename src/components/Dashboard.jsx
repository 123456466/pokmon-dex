import React from "react";
import MyBag from "../style/dex/DashboardStyle.jsx";
import Ball from "../style/dex/Ball.jsx";
import BallsInBag from "../style/dex/BallsInBag.jsx";
import EntryPokemon from "../style/dex/EntryPokemonStyle.jsx";

const Dashboard = ({ myPokemons, del }) => {
  return (
    <MyBag>
      <p>나의 포켓몬</p>
      <BallsInBag>
        {myPokemons.map(({ id, get, name, img }) =>
          get ? (
            <EntryPokemon id={id}>
              <img src={img} />
              <p>{name}</p>
              <button onClick={() => del(id)}>보내기</button>
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
