    import React from 'react'
    import { useSelector } from "react-redux";
    import * as actions from '../../redux/actions'
    import { useDispatch } from "react-redux";
    
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
        height: '600px',
        borderRadius: '7%',
        border: '2px solid #ffffff',
        paddingLeft: '15px',
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

        if(!props.estado) return null
        return (
        <>
            <div style={BACKGROUND_EFFECT}>
                    <div style={CAJA_COTIZACION}>
                        <button onClick={props.cerrar} style={BOTON_CERRAR}>X</button>
                        <h2 style={{textAlign: 'center'}}>Cotización de tu pedido:</h2>
                        <p>este es un cuadro</p>
                        {
                            //productosCotizacion.map((e) => <p>{e.nombre}</p>)
                        } 
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Cant.</th>
                                    <th>Imagen</th>
                                    <th>Nombre</th>
                                    <th>V.Unitario</th>
                                    <th>V.Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {                                    
                                    productosCotizacion.map((e,i) => (
                           
                                    <tr key={i}>
                                        <td><button onClick={()=> clickEliminar(e.id)}>x</button></td>
                                        <td><input type="number" min='1' max='12' defaultValue='1' style={{width: '32px'}}/></td>
                                        <td>{e.nombre}</td>
                                        <td>{e.nombre}</td>
                                        <td>{e.precio}</td>
                                        <td>{e.precio}</td>
                                    </tr> 
                                    
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>    
            </div>
        
        </>
        )
    }
    