import styled from "styled-components";
import SetColor from "./SetColor";

const DetailBackGround = styled.div`
  display: flex;
  background: linear-gradient(
    315deg,
    ${(props) =>
      SetColor.find((e) => {
        return e.type === String(...props.types);
      }).color},
    ${(props) => {
      if (props.types.length === 2) {
        return SetColor.find((e) => {
          return e.type === String(...props.types[1]);
        }).color;
      } else {
        return SetColor.find((e) => {
          return e.type === String(...props.types);
        }).color + '5e';
      }
    }}
  );
  height: 100%;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export default DetailBackGround;
