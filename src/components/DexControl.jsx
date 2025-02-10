import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Board from "./Dashboard.jsx";
import PokemonCard from "./PokemonCard.jsx";
import MOCK_DATA from "./PokemonList.jsx";
import PokemonCardsContainer from "../style/dex/PokemonCardContainer.jsx";

const PALLET_TOWN = [
  { id: 1, get: false },
  { id: 2, get: false },
  { id: 3, get: false },
  { id: 4, get: false },
  { id: 5, get: false },
  { id: 6, get: false },
];

const entry = [];

const PokemonMain = () => {
  const navigate = useNavigate();

  const bagInpokemon = [...entry, ...PALLET_TOWN].slice(0, 6);

  const [myPokemons, setPokemon] = useState(bagInpokemon);

  const getPokemon = (id) => {
    if (myPokemons[5].get) {
      return alert("보관할 수 있는 포켓몬은 6마리 입니다.");
    }

    if (entry.find((getPokemon) => getPokemon.id === id)) {
      return alert("이미 잡은 포켓몬 입니다.");
    }

    MOCK_DATA.filter((pokemon) => {
      return pokemon.id === id
        ? entry.push({
            id: pokemon.id,
            img: pokemon.img_url,
            name: pokemon.korean_name,
            get: true,
          })
        : null;
    });
    const present = [...entry, ...PALLET_TOWN].slice(0, 6);
    setPokemon(present);
  };

  const del = (id) => {
    entry.map((pokemon, index) => {
      pokemon.id === id ? entry.splice(index, 1) : null;
    });
    const updatePokemon = [...entry, ...PALLET_TOWN].slice(0, 6);
    setPokemon(updatePokemon);
  };

  const moveToDetail = (id) => {
    navigate(`/Modal/${id}`);
  };

  return (
    <div>
      <Board myPokemons={myPokemons} del={del} />
      <PokemonCardsContainer>
        {MOCK_DATA.map(({ img_url, korean_name, id }) => (
          <PokemonCard
            img_url={img_url}
            korean_name={korean_name}
            id={id}
            getPokemon={getPokemon}
            moveToDetail={moveToDetail}
          />
        ))}
      </PokemonCardsContainer>
    </div>
  );
};

export default PokemonMain;
