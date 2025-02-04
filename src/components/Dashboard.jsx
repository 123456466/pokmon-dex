import React from "react";

const Dashboard = (getPokemons) => {
    return <div>
        <p>나의 포켓몬</p>
        <div>
            {() => getPokemons.map(({id,get}) => (
                <p key={id}>{id}</p>
            ))}
        </div>
    </div>
}

export default Dashboard