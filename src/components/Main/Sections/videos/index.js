import React from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";

const StyledVideo = styled.div`
  margin: 1em 1.5em;
`;
const StyledImg = styled.img`
  width: 25em;
  @media screen and (max-width: 1300px) {
    width: 28em;
  }
  @media screen and (max-width: 900px) {
    width: 80%;
  }
`;
const StyledH3 = styled.h3`
  margin: 0.3em;
  font-size: 1.4em;
  padding: 0.05em 0.5em;
  border-radius: 0.3em;
`;
const StyledP = styled.p`
  letter-spacing: 0.1em;
`;
const StyledA = styled.a`
  :hover {
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
  }
  @media screen and (max-width: 1300px) {
    display: flex;
    justify-content: center;
  }
`;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: .5em;
  color: white;
`;
const StyledDelete = styled.div`
  font-size: 2em;
  text-align: center;
  color: red;
  :nth-child(1n){
    cursor: pointer;
  }
  
`;
const Video = (props) => {
  const { imagen, video, nombre, descripcion, categoria } = props.datos;
  const { eliminarVideo } = props;
  const { color } = props.colores;
  const bordeH2 = { backgroundColor: color };

  return (
    <StyledVideo>
      <StyledDiv>
        <StyledH3 style={bordeH2}>{nombre}</StyledH3>
        <StyledP>{descripcion}</StyledP>
      </StyledDiv>
      <StyledA href={video}>
        <StyledImg src={imagen} alt="Foto" />
      </StyledA>
      <StyledDelete>
        <AiOutlineCloseCircle onClick={() => eliminarVideo(nombre)} />
      </StyledDelete>
    </StyledVideo>
  );
};

export default Video;
