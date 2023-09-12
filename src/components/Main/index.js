import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FormCategory from "./NewCategory";
import Form from "./NewVideo";
import Error from "./Page404";
import { Routes, Route} from "react-router-dom";
import Sections from "./Sections";

const Main = () => {
  const [videos, actualizarVideos] = useState([
    {
      id: uuidv4(),
      nombre: "Como usar variables",
      video: "https://www.youtube.com/watch?v=PztCEdIJITY",
      imagen: "https://i.ytimg.com/vi/PztCEdIJITY/maxresdefault.jpg",
      categoria: "General",
      descripcion: "Aprende a usar var, Let y Const segun se requiera",
      codigo: "1",
    },
    {
      id: uuidv4(),
      nombre: "¿Que es JavaScript?",
      video: "https://www.youtube.com/watch?app=desktop&v=GJfOSoaXk4s",
      imagen: "https://i.ytimg.com/vi/GJfOSoaXk4s/mqdefault.jpg",
      categoria: "General",
      descripcion: "¿Qué es JavaScript y por que es tan usado?",
      codigo: "2",
    },
    {
      id: uuidv4(),
      nombre: "Equipo Front End",
      video: "https://www.youtube.com/watch?app=desktop&v=rpvrLaBQwgg",
      imagen: "https://i.ytimg.com/vi/rpvrLaBQwgg/maxresdefault.jpg",
      categoria: "General",
      descripcion: "¿Qué hace el equipo de Front End?",
      codigo: "3",
    },
    {
      id: uuidv4(),
      nombre: "Spring Framework",
      video: "https://www.youtube.com/watch?v=t-iqt1b2qqk",
      imagen: "https://i.ytimg.com/vi/t-iqt1b2qqk/maxresdefault.jpg",
      categoria: "Back End",
      descripcion: "Spring Framework, el framework más usado de Java.",
      codigo: "4",
    },
    {
      id: uuidv4(),
      nombre: "¿Que es SQL?",
      video: "https://www.youtube.com/watch?v=cLLKVd5CNLc",
      imagen: "https://i.ytimg.com/vi/cLLKVd5CNLc/maxresdefault.jpg",
      categoria: "Back End",
      descripcion:
        "Diferencia entreestructura de datos relacional y no relacional",
      codigo: "5",
    },
    {
      id: uuidv4(),
      nombre: "Simplificando tu código Java",
      video: "https://www.youtube.com/watch?v=EoPvlE85XAQ",
      imagen: "https://i.ytimg.com/vi/EoPvlE85XAQ/maxresdefault.jpg",
      categoria: "Back End",
      descripcion: "Como simplificar codigo con Enum",
      codigo: "6",
    },
    {
      id: uuidv4(),
      nombre: "Soft Skills",
      video: "youtube.com/watch?v=vhwspfvI52k",
      imagen: "https://i.ytimg.com/vi/vhwspfvI52k/maxresdefault.jpg",
      categoria: "Innovacion y Gestión",
      descripcion: "Habilidades más buscadas por las empresas",
      codigo: "7",
    },
    {
      id: uuidv4(),
      nombre: "Mejores Soft Skills",
      video: "https://www.youtube.com/watch?app=desktop&v=YhR7Zp8NUzE",
      imagen: "https://i.ytimg.com/vi/YhR7Zp8NUzE/maxresdefault.jpg",
      categoria: "Innovacion y Gestión",
      descripcion: "La importancia de estas habilidades",
      codigo: "8",
    },
    {
      id: uuidv4(),
      nombre: "Metodologias ágiles",
      video: "https://www.youtube.com/watch?app=desktop&v=6N3OkLCfK-0",
      imagen: "https://i.ytimg.com/vi/6N3OkLCfK-0/maxresdefault.jpg",
      categoria: "Innovacion y Gestión",
      descripcion: "¿Que són las metodologias ágiles y su beneficio?",
      codigo: "9",
    },
  ]);
  const [categorias, actualizarCategorias] = useState([
    {
      id: uuidv4(),
      titulo: "General",
      descripcion: "Videos sobre programacion  de Alura Latam",
      color: "#00C86F",
    },
    {
      id: uuidv4(),
      titulo: "Back End",
      descripcion: "Formación Back End de Alura Latam",
      color: "#FE8C2A",
    },
    {
      id: uuidv4(),
      titulo: "Innovacion y Gestión",
      descripcion: "Formación Innovación y Gestión de Alura Latam",
      color: "blue",
    },
  ]);
  //Registrar video
  const registrarVideo = (video) => {
    console.log("Nuevo video:", video);
    //Spread operator, agrega contenido a la const
    actualizarVideos([...videos, video]);
    console.log(actualizarVideos);
  };

  const registrarCategoria = (categoria) => {
    console.log("Nuevo categoria:", categoria);
    //Spread operator, agrega contenido a la const
    actualizarCategorias([...categorias, categoria]);
    console.log(actualizarCategorias);
  };

  //Eliminar video
  const eliminarVideo = (nombre) => {
    console.log("Eliminar video", nombre);
    const nuevosVideos = videos.filter((video) => video.nombre !== nombre);
    actualizarVideos(nuevosVideos);
  };

  //Eliminar categoria
  const eliminarCategoria = (titulo) => {
    console.log("Eliminar categoria", titulo);
    const nuevosCategorias = categorias.filter(
      (categoria) => categoria.titulo !== titulo
    );
    actualizarCategorias(nuevosCategorias);
  };

  return (
    <Routes>
      <Route path="AluraFlix/" element={<Sections datos={categorias}
            key={categorias.titulo}
            videos={videos}
            eliminarVideo={eliminarVideo}/>} />
    <Route
          path="/AluraFlix/form"
          element={
            <Form
              datos={categorias}
              key={categorias.titulo}
              registrarVideo={registrarVideo}
            />
          }
        />
        <Route
          path="/AluraFlix/category"
          element={
            <FormCategory
              registrarCategoria={registrarCategoria}
              datos={categorias}
              eliminarCategoria={eliminarCategoria}
            />
          }
        />
        <Route path='*' element={<Error />} />

      </Routes>
      )
      }

export default Main;