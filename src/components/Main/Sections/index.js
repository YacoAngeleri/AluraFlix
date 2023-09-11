import React from "react";
import Section1 from "./sect/sec1";
import Careouseles from "./sect/sec2";



const Sections = (props) => {
    return(
        <>
        <Section1 />
        {props.datos.map((categorias) => {
        return (
          <Careouseles
            datos={categorias}
            key={categorias.titulo}
            videos={props.videos.filter( video => video.categoria === categorias.titulo)}
            titulo={categorias.titulo}
            eliminarVideo={props.eliminarVideo}
          />
        );

      })}
        </>
    )
}

export default Sections