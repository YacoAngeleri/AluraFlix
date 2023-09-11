import React from "react";
import styled from "styled-components";


const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledH1 = styled.h1`
  font-size: 3em;
  text-align: center;
  color: white;
  margin: 1em;
  padding: 0.5em;
`;
const StyledImg = styled.img`
  margin: 2em 1em 0 1em;
  width: 20em;
`;
const Error = () => {
  return (
    <StyledDiv>
    <StyledImg src="https://cdnebasnet.com/data/cache/opt_png/eshop/funnatic/images/posts/524-1675765865-1400x1400.png" alt="Error 404" />
    <StyledH1>¡Ha ocurrido un error! Esta pagina no existe.</StyledH1>
    </StyledDiv>
  );
};

export default Error;
