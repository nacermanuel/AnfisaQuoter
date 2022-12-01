import React from "react";
import './Producto.css'


const Producto = (props) => {
    return(
        <div className="ComponenteProducto">
            <h3>Nombre del Producto:</h3>
            {props.nombre}
            <h3>Precio del Producto:</h3>
            ${props.precio}
        </div>
    )
}

export default Producto