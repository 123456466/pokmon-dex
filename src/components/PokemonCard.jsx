import React from "react";

const PokemonCarde = ({id,img_url,korean_name}) => {
    return <div className="card" key={id}>
        <img src={img_url} />
        <p>{korean_name}</p>
    </div>
}

export default PokemonCarde