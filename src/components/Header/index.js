import React from "react";
import styled from "styled-components";
import Boton from "../Boton";
import LogoMain from "../../assets/imagenes/LogoMain.png"
import { Link } from "react-router-dom";


const StyledHeader = styled.nav`
background-color: black;
display: flex;
justify-content: space-between;
padding: 1em 2em;
`

const Logo = styled.img`
margin: 1em;
width: 8em;
@media screen and (max-width: 700px) {
  width: 7em;
  }
  @media screen and (max-width: 500px) {
  width: 6em;
  }
`

const Header = () => {
    return (
      <StyledHeader>  
        <Link to="/"><Logo src={LogoMain} alt="Logo" /></Link>
        <div>
          <Link to="/form"><Boton>Nuevo video</Boton></Link>
        </div>
      </StyledHeader>
    );
  };
  
  export default Header;