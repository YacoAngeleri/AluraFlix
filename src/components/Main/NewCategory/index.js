import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Boton from "../../Boton/index";
import Tabla from "./TableCategories/index";

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
  display: flex;
  margin-bottom: 6em;
`;

const FormCategory = (props) => {
  const { registrarCategoria } = props;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (evento) => {
    console.log(evento);
    let datosCategoria = evento;
    registrarCategoria(datosCategoria);
    handleReset()
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    Array.from(document.querySelectorAll("textarea")).forEach(
      (input) => (input.value = "")
    );
  };

  return (
    <div>
      <h2>Nueva Categoria</h2>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledDiv>
          <StyledInput
            type="text"
            placeholder="Titulo"
            {...register("titulo", {
              required: true,
              minLength: 2,
            })}
          />
          {errors.titulo?.type === "required" && (
            <p className="error">El campo titulo no puede estar vacio</p>
          )}
          {errors.titulo?.type === "minLength" && (
            <p className="error">
              El campo titulo debe tener al menos 2 caracteres
            </p>
          )}
        </StyledDiv>
        <StyledDiv>
          <StyledTextarea
            cols="40"
            rows="5"
            type="text"
            placeholder="Descripcion"
            {...register("descripcion", {
              required: true,
            })}
          />
          {errors.descripcion?.type === "required" && (
            <p className="error">El campo descripción no puede estar vacio</p>
          )}
        </StyledDiv>

        <div className="color">
          <label>Color:</label>
          <input
            type="color"
            id="Color"
            name="Color"
            placeholder="Color"
            {...register("color", {
              required: true,
            })}
          />
          {errors.color?.type === "required" && (
            <p className="error">El campo color no puede estar vacio</p>
          )}
        </div>

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
          <Boton variant="blue" border="blue" type="submit" className="btn-1">
            Guardar
          </Boton>
          <Boton variant="gray" border="gray" className="btn-2" onClick={handleReset}>
            Limpiar
          </Boton>
        </StyledBotones>
      </StyledForm>
      <Tabla datos={props.datos} eliminarCategoria={props.eliminarCategoria} />
    </div>
  );
};

export default FormCategory;
