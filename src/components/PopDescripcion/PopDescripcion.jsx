import React from "react";
import './PopDescripcion.css'
import * as actions from '../../redux/actions'
import { useDispatch } from "react-redux";

export default function Popup(props){

    const dispatch = useDispatch()
    
    const clickAgregar = (i) => {
        dispatch(actions.agregaCotizacion(i))
    }
    
    if(!props.estado) return null


    return(
        <>
                    <div className="Pop-Up">
                        <div className="contenedor-descriptivo">
                            <div className="contenedor-descriptivo-elementos">
                                <div style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '15px', paddingTop: '11px' }}>
                                    <button onClick={event => props.cerrar({info:{}, estado: false})}>X</button> 
                                </div>
                                <div style={{ placeContent: 'center' }}>
                                    <h1>{props.info.nombre}</h1>
                                </div>
                                <div>
                                    <h3>{props.info.descripcion}</h3>
                                </div>
                                <div style={{display: 'flex', flexFlow: 'row', alignContent:'center', justifyContent:'center'}}>
                                    <div style={{display: 'flex', flexFlow: 'row', alignContent:'center', justifyContent:'center', width: '50%'}}>
                                        <ul >
                                            { 
                                                props.info.bullets.map((e,i) => <li key={i}>{e}</li>)
                                            }
                                        </ul>
                                    </div>
                                    <div style={{display: 'flex', flexFlow: 'row', alignContent:'center', justifyContent:'center', width: '50%'}}>
                                        <img src={require(`../Producto/imagenes/${props.info.img}`)} alt="" style={{ maxHeight: '250px'}}/>
                                    </div>
                                </div>
                                <div style={{display: 'flex', flexFlow: 'row', alignContent:'center', justifyContent:'center', marginTop: '10px' }}>
                                    <div style={{display: 'flex', flexFlow: 'row', alignContent:'center', justifyContent:'center', width: '50%'}}>
                                        <h1>Precio:  </h1>
                                        <h1> ${props.info.precio}</h1>
                                    </div>
                                    <div style={{display: 'flex', flexFlow: 'row', alignContent:'center', justifyContent:'center', width: '50%'}}>
                                        <button onClick={()=> clickAgregar(props.info.id)} className="botonAgregar">Agregar Producto a la cotizacion</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

        </>
    )
}

