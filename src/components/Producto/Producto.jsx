import React from "react";
import './Producto.css'
import * as actions from '../../redux/actions'
import { useDispatch } from "react-redux";


const Producto = (props) => {
    
    const dispatch = useDispatch()
    
    const clickAgregar = (i) => {
        dispatch(actions.agregaCotizacion(i))
    }

//    onClick={()=> agregaCotizacion(props.todoProducto.id) } 
    return(
        <>

            <div className="ComponenteProducto">
                <div>
                    <h3 className="textosProductos">{props.todoProducto.nombre}</h3>
                </div>
                <div>
                    <h4 className="textosProductos">Precio: ${props.todoProducto.precio}</h4>
                </div>
                <div >
                    <img src={require(`./imagenes/${props.todoProducto.img}`)} alt="imagen producto" className="imagenPro" />
                </div> 
                <div className="divBotonesPro">
                    <button onClick={event => props.descriptivo(props.todoProducto)} className='botonesProducto'>Ver Producto</button>
                    <button onClick={()=> clickAgregar(props.todoProducto.id)} className='botonesProducto'>Agregar</button>
                </div>
                
            </div>
            
        </>
    )
}

export default Producto