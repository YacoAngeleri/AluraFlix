import React from "react";
import styled from "styled-components";
import LogoMain from "../../assets/imagenes/LogoMain.png"
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
background-color: black;
text-align: center;
border-top: blue;
`

const Logo = styled.img`
margin: 1em;
width: 8em;
`

const Footer = () => {
    return (
      <StyledFooter>
        <Link to="AluraFlix/"><Logo src={LogoMain} alt="Logo Aluraflix" /></Link>
      </StyledFooter>
    );
  };
  
  export default Footer;