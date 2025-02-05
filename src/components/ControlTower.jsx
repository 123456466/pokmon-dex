import { useState } from 'react'
import Board from '../components/Dashboard'
import PokemonCard from '../components/PokemonCard'
import MOCK_DATA from '../components/PokemonList'
import PokemonCardsContainer from '../style/PokemonCardContainer.jsx'

const PALLET_TOWN = [
    { id: 1, get: false },
    { id: 2, get: false },
    { id: 3, get: false },
    { id: 4, get: false },
    { id: 5, get: false },
    { id: 6, get: false }
]

const entry = []

const PokemonMain = () => {
    const [myPokemons, setPokemon] = useState(PALLET_TOWN)

    const getPokemon = (id) => {
        if(myPokemons[5].get){
            alert('보관할 수 있는 포켓몬은 6마리 입니다.')
        }
        MOCK_DATA.filter((pokemon) => {
            return (pokemon.id == id)? entry.push({id: crypto.randomUUID(), img: pokemon.img_url, name: pokemon.korean_name, get: true}) : null
        })
        const present = [...entry, ...PALLET_TOWN].slice(0,6)
        setPokemon(present)
    }

    const del = (id) => {
        entry.map((pokemon,index) => {
            (pokemon.id === id)? entry.splice(index,1) : null
        })
        const updatePokemon = [...entry, ...PALLET_TOWN].slice(0,6)
        setPokemon(updatePokemon)
    }

    return <div>
        <Board myPokemons={myPokemons} del={del} />
        <PokemonCardsContainer>
            {MOCK_DATA.map(({ img_url, korean_name, id }) => (
                <PokemonCard img_url={img_url} korean_name={korean_name} id={id} getPokemon={getPokemon} />
            ))}
        </PokemonCardsContainer>
    </div>
}

export default PokemonMain