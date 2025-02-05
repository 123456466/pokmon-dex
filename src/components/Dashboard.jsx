import React from "react";
import MyBag from '../style/DashboardStyle.jsx'
import Ball from '../style/ball.jsx'
import BallsInBag from '../style/BallsInBag.jsx'
import EntryPokemon from "../style/EntryPokemonStyle.jsx";

const Dashboard = ({ myPokemons }) => {
    return <MyBag>
        <p>나의 포켓몬</p>
        <BallsInBag>
            {myPokemons.map(({ id, get, name, img }) => (
                (get) ? <EntryPokemon id={id}>
                    <img src={img}/>
                    <p>{name}</p>
                    <button>보내기</button>
                </EntryPokemon> :
                <Ball src='src/img/포켓몬볼.png' />
            ))}
        </BallsInBag>
    </MyBag>
}

export default Dashboard