import { useState } from 'react'
import Board from '../components/Dashboard'
import Cards from '../components/PokemonCard'
import MOCK_DATA from '../components/PokemonList'

const MY_POKEMON = [
    {id: 1, get: false},
    {id: 2, get: false},
    {id: 3, get: false},
    {id: 4, get: false},
    {id: 5, get: false},
    {id: 6, get: false}
]

const PokemonMain = () => {
    const [getPokemons,setPokemon] = useState(MY_POKEMON)
    const [newPokemons,setNewPokemon] = useState('')

    return <div>
        <Board getPokemons={getPokemons}/>
        <div>
            {MOCK_DATA.map(({ img_url, korean_name, id }) => (
                <Cards img_url={img_url} korean_name={korean_name} id={id} />
            ))}
        </div>
    </div>
}

export default PokemonMain