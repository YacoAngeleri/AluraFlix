

const Tr = (props) => {
    return (
        <tr>
            <td className="bordeTd">{props.datos.titulo}</td>
            <td className="bordeTd">
              {props.datos.descripcion}
            </td>
            <td className="bordeTd">
              <button onClick={ () => props.eliminarCategoria(props.datos.titulo)}>Remover</button>
            </td>
          </tr>
    )
}

export default Tr;