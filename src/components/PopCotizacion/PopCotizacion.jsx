import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../redux/actions'
import './PopCotizacion.css'

const BACKGROUND_EFFECT = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(0,0,0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const CAJA_COTIZACION = {
    backgroundColor: 'rgb(233, 210, 227)',
    width: '900px',
    height: '95%',
    borderRadius: '7%',
    border: '2px solid #ffffff',
    paddingLeft: '15px',

}

const CAJA_PRODUCTOS = {
    overflowY: 'scroll',
    maxHeight: '80%'
}

const BOTON_CERRAR = {
    float: 'right', 
    marginRight: '15px',
    marginTop: '15px'

}


export default function PopCotizacion(props) {

    const productosCotizacion = useSelector(state => state.cotizacion)

    const dispatch = useDispatch()
    

    const clickEliminar = (i) => {
        dispatch(actions.eliminarCotizacion(i))
    }

    

    const cambioCantidad = (id,event) => {
        console.log(id)
        console.log(event.target.value)
        dispatch({type: 'ACTUALIZAR_CANTIDAD', payload: {id: id , value: parseInt(event.target.value)}})
    }

    if(!props.estado) return null
    return (
    <>
        <div style={BACKGROUND_EFFECT}>
                <div style={CAJA_COTIZACION}>
                    <button onClick={props.cerrar} style={BOTON_CERRAR}>X</button>
                    <h2 style={{textAlign: 'center'}}>Cotización de tu pedido:</h2>
                    <div className='cajaProductos' style={CAJA_PRODUCTOS}>
                        <table style={{marginLeft: 'auto' , marginRight: 'auto'}}>
                            <thead>
                                <tr>
                                    <th style={{width: '30px', textAlign: 'center'}}></th>
                                    <th style={{textAlign: 'center'}}>Cant.</th>
                                    <th style={{textAlign: 'center'}}>Imagen</th>
                                    <th style={{width: '390px', textAlign: 'center'}} >Nombre</th>
                                    <th style={{width: '80px', textAlign: 'center'}} >V.Unitario</th>
                                    <th style={{width: '80px', textAlign: 'center'}}>V.Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {   
                                    productosCotizacion.length  ?                             
                                    productosCotizacion.map((e,i) => (
                            
                                    <tr key={i}>
                                        <td><button onClick={()=> clickEliminar(e.id)}>x</button></td>
                                        <td><input onChange={(event)=> cambioCantidad(e.id,event)} name={i} type="number" value={e.cantidad} min='1' max='12' style={{width: '32px'}}/></td>
                                        <td><img src={require(`../Producto/imagenes/${e.img}`)} alt="" className='imagenMini' /></td>
                                        <td style={{textAlign: 'center'}} >{e.nombre}</td>
                                        <td style={{textAlign: 'center'}} >$ {(e.precio).toFixed(2)}</td>
                                        <td style={{textAlign: 'center', fontWeight: 'bold' }} >$ {(e.cantidad * e.precio).toFixed(2)}</td>
                                    </tr> 
                                    
                                    )) : <td colSpan={6}><p style={{textAlign: 'center', fontWeight: 'bold' }} >No hay productos seleccionados</p></td>
                                }
                            </tbody>
                        </table>
                        <h3 style={{ textAlign: 'right', width: '88%'}}>Total Producto: $ { ( productosCotizacion.length ? productosCotizacion.map((e) => ( e.cantidad * e.precio )).reduce((sum, acu) => sum + acu).toFixed(2) : 0) }</h3>                    
                    </div>
                </div>    
        </div>
    
    </>
    )
}
