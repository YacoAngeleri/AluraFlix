import React, { useState } from "react";
import styled from "styled-components";
import "./new-video.css";
import { useForm } from "react-hook-form";
import isValidHttpUrl from "./validatorURL";
import validCategory from "./validarCategory";
import Boton from "../../Boton/index";
import Opciones from "./ListaOpciones/Opciones";
import { Link } from "react-router-dom";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 1em;
`;
const StyledDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
const StyledInput = styled.input`
  background-color: rgb(102, 102, 102);
  color: white;
  margin: 1em;
  padding: 0.5em;
`;
const StyledTextarea = styled.textarea`
  background-color: rgb(102, 102, 102);
  color: white;
  margin: 1em;
  padding: 0.5em;
`;
const StyledBotones = styled.div`
  margin-bottom: 6em;
  @media screen and (max-width: 536px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;


const StyledSelect = styled.select`
  background-color: rgb(102, 102, 102);
  color: white;
  margin: 1em;
  padding: 0.5em;
`;

//Funcion a devolver
const Form = (props) => {

  const { registrarVideo } = props
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (evento) => {
    console.log("Evento enviado:", evento);
    let datosAEnviar = evento;
    registrarVideo(datosAEnviar)
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    ); 
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h2>Nuevo video</h2>
      <StyledDiv>
        <StyledInput
          type="text"
          placeholder="Nombre"
          {...register("nombre", {
            required: true,
            minLength: 2,
            maxLength: 20,
          })}
        />
        {errors.nombre?.type === "required" && (
          <p className="error">El campo nombre no puede estar vacio</p>
        )}
        {errors.nombre?.type === "minLength" && (
          <p className="error">
            El campo nombre debe tener al menos 2 caracteres
          </p>
        )}
        {errors.nombre?.type === "maxLength" && (
          <p className="error">
            El campo nombre puede tener maximo 20 caracteres
          </p>
        )}
      </StyledDiv>
      <StyledDiv>
        <StyledInput
          type="url"
          placeholder="URL del video"
          {...register("video", {
            required: true,
            validate: isValidHttpUrl,
          })}
        />
        {errors.video?.type === "required" && (
          <p className="error">El campo URL del video no puede estar vacio</p>
        )}
        {errors.video?.type === "validate" && (
          <p className="error">
            El campo URL del video requiere una URL valida
          </p>
        )}
      </StyledDiv>
      <StyledDiv>
        <StyledInput
          type="url"
          placeholder="URL imagen del video"
          {...register("imagen", {
            required: true,
            validate: isValidHttpUrl,
          })}
        />
        {errors.imagen?.type === "required" && (
          <p className="error">
            El campo URL de la imagen no puede estar vacio
          </p>
        )}
        {errors.imagen?.type === "validate" && (
          <p className="error">
            El campo URL de la video requiere una URL valida
          </p>
        )}
      </StyledDiv>
      <StyledDiv>
        <StyledSelect
          datos={props.secciones}
          key={props.datos}
          {...register("categoria", {
            required: true,
            validate: validCategory,
          })}
        >
          <option value="" selected disabled hidden>
            Seleccione una categoria
          </option>
          {props.datos.map((seccion) => {
            return (
              <Opciones datos={seccion.titulo} key={seccion.titulo}></Opciones>
            );
          })}
          {errors.categoria?.type === "validate" && (
            <p className="error">Seleccione una categoria correcta</p>
          )}
          {/* {errors.categoria?.type === "required" && (
            <p className="error">Seleccione una categoria</p>
          )} */}
        </StyledSelect>
      </StyledDiv>
      <StyledDiv>
        <StyledTextarea
          cols="40"
          rows="5"
          type="text"
          placeholder="Descripcion"
          {...register("descripcion", {
            required: true,
            maxLength: 60,
          })}
        />
        {errors.descripcion?.type === "required" && (
          <p className="error">El campo descripción no puede estar vacio</p>
        )}
        {errors.descripcion?.type === "maxLength" && (
          <p className="error">El campo descripción no puede superar los 60 caracteres</p>
        )}
      </StyledDiv>
      <StyledDiv>
        <StyledInput
          type="text"
          placeholder="Codigo de seguridad"
          {...register("codigo", {
            required: true,
            maxLength: 10,
            minLength: 3,
          })}
        />
        {errors.codigo?.type === "required" && (
          <p className="error">
            El campo Codigo de seguridad no puede estar vacio
          </p>
        )}
        {errors.codigo?.type === "maxLength" && (
          <p className="error">
            El campo Codigo de seguridad debe tener maximo 10 caracteres
          </p>
        )}
        {errors.codigo?.type === "minLength" && (
          <p className="error">
            El campo Codigo de seguridad debe tener minimo 3 caracteres
          </p>
        )}
      </StyledDiv>
      <StyledBotones>
        <div>
          <Boton variant="blue" border="blue" type="submit" className="btn-1">
            Guardar
          </Boton>
          <Boton variant="gray" border="gray" className="btn-2" onClick={handleReset}>
            Limpiar
          </Boton>
        </div>
        <Link to="/category"><Boton variant="blue" border="blue" className="btn-3">
          Nueva categoria
        </Boton></Link>
      </StyledBotones>
    </StyledForm>
  );
};

export default Form;
