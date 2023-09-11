import "./tables.css";
import Tr from "./Table";

const Tabla = (props) => {
  return (
    <div className="table">
      <table className="default">
        <tbody>
          <tr className="titles">
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Remover</th>
          </tr>
          {
          props.datos.map( (seccion) => {
            return <Tr datos={seccion} key={seccion.titulo} eliminarCategoria={props.eliminarCategoria}/>
          })
        }
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
