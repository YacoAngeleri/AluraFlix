
const Opciones = (props) => {

    // const manejarCambio = (e) => {
    //     console.log("cambio", e.target.value)
    //     props.actualizarEquipo(e.target.value)
    // }
const titulo = props.datos
return (
        <option value={titulo}>{titulo}</option>
)

            // value={titulo} /*onChange={manejarCambio}*/>
}

export default Opciones