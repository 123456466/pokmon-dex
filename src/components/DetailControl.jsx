import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Detail from "../components/PokemonDetail.jsx";
import MOCK_DATA from "./PokemonList.jsx";
import DetailBackGround from "../style/modal/DetailBackGruond.jsx";

const PokemonDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const selectedPokemon = MOCK_DATA.filter((pokemon) => {
    return pokemon.id === Number(id) ? true : false;
  })[0];

  const back = () => navigate("/Dex");

  return (
    <DetailBackGround types={selectedPokemon.types}>
      <Detail
        back={back}
        img_url={selectedPokemon.img_url}
        name={selectedPokemon.korean_name}
        types={selectedPokemon.types}
        description={selectedPokemon.description}
      />
    </DetailBackGround>
  );
};

export default PokemonDetail;
