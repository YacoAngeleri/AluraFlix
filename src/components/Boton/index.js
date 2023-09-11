import React from "react";
import styled from "styled-components";

const ButtonComponent = styled.button`
  border-radius: 2px;
  vertical-align: middle;
  margin: 1em;
  padding: 0.5em 2em;
  font-weight: 500;
  cursor: pointer;
  background-color: ${(props) =>
    props.variant === "blue"
      ? "#2A7AE4"
      : props.variant === "gray"
      ? "#9E9E9E"
      : "#000000"};
  border-color: ${(props) =>
    props.border === "blue"
      ? "#2A7AE4"
      : props.border === "gray"
      ? "#9E9E9E"
      : "#FFFFFF"};
  color: ${(props) =>
    props.color === "black"
      ? "#000000"
      : "#FFFFFF"};
        @media screen and (max-width: 1300px) {
    margin: 1em 0.8em;
  }
  @media screen and (max-width: 650px) {
    padding: 0.4em 1.5em;
    margin: 1em .2em;
  }
  @media screen and (max-width: 536px) {
    padding: 0.3em 1em;
    margin: 1em 0;
  }
  @media screen and (max-width: 416px) {
    padding: 0.3em .7em;
  }
  @media screen and (max-width: 360px) {
    padding: 0.3em .5em;
  }
`;
const Boton = ({
  type,
  variant,
  border,
  color,
  className,
  size,
  id,
  onClick,
  children,
}) => {
  return (
    <ButtonComponent
      type={type ? type : "button"}
      variant={variant}
      border={border}
      color={color}
      className={className ? `btn-component ${className}` : "btn-component"}
      id={id}
      onClick={onClick}
      size={size}
    >
      {children}
    </ButtonComponent>
  );
};

export default Boton;
