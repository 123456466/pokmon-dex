import styled from "styled-components";
import SetColor from "./SetColor";

const DetailBackGround = styled.div`
  display: flex;
  background-color: ${(props) => SetColor.find((e)=>{console.log(e.type === props.types)})};
  height: 100%;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export default DetailBackGround
