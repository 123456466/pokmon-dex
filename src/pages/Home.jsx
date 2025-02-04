import React from "react";
import { useNavigate } from 'react-router-dom'
import MainBox from "../style/HomeStyle";

const Home = () => {
    const navigate = useNavigate()

    return <MainBox>
        <img src="src/img/pokemon_logo.png"/>
        <button onClick={() => {
            navigate('/Dex')
        }}>시작하기</button>
    </MainBox>
}

export default Home