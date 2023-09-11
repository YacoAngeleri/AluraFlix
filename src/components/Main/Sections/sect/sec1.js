import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  background: url("https://static.vecteezy.com/system/resources/previews/000/677/302/original/abstract-technology-banner-background.jpg");

  background-size: cover;
  display: flex;
  color: white;
  margin: 0;
  padding: 0;
  padding-top: 5em;
  padding-bottom: 5em;
  @media screen and (max-width: 950px) {
    padding-top: 2em;
    padding-bottom: 2em;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
const DivSection = styled.div`
margin: 1em 2em;
@media screen and (max-width: 700px) {
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
`
const Title = styled.h1`
  font-size: 3em;
  background-color: #6bd1ff;
  width: 5em;
  text-align: center;
  margin-bottom: .8em;
  padding: .2em 0;
  @media screen and (max-width: 1088px) {
    font-size: 2.5em;
    margin-bottom: 0;
    text-align: center;
  }

`;
const Title2 = styled.h2`
font-size: 2em;
text-align: left;
margin-bottom: .5em;
margin-left: 0;
@media screen and (max-width: 1088px) {
    font-size: 1.8em;
  }
  @media screen and (max-width: 700px) {
    margin-left: 1em;
  }
`;
const Contenido = styled.p`
margin-right: 5em;
font-size: 1.1em ;
@media screen and (max-width: 700px) {
    text-align: center;
    margin-right: 0;
    width: 80%;
  }
`;
const Logo = styled.img`
margin-right: 2em;
width: 35em;
@media screen and (max-width: 1088px) {
    width: 30em;
  }
  @media screen and (max-width: 1000px) {
    width: 25em;
  }
  @media screen and (max-width: 800px) {
    width: 23em;
  }
  @media screen and (max-width: 700px) {
    margin-right: 0;
  }
  @media screen and (max-width: 500px) {
    width: 19em;
  }
`
const StyledA = styled.a`
:hover{
  -webkit-transform: scale(1.03);
    transform: scale(1.03);
}
`;

const Section1 = () => {
  return (
    <StyledSection>
      <DivSection>
        
        <Title>Front End</Title>
        <Title2>Challenge React</Title2>
        <Contenido>
          Este challenge es una forma de aprendizaje. Es un mecanismo donde
          podrás comprometerte en la resolución de un problema para poder
          aplicar todos los conocimientos adquiridos en la formación React.
        </Contenido>
      </DivSection>
      <div>
      <StyledA href="https://www.youtube.com/watch?v=ov7vA5HFe6w"><Logo src="https://i.ytimg.com/vi/PlaQ913yggM/maxresdefault.jpg" alt="Video que significa ser programador"></Logo></StyledA>
      </div>
    </StyledSection>
  );
};

export default Section1;
