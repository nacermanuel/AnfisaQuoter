import React from 'react';
import './Navbar.css'
import { useSelector } from 'react-redux';

const Navbar = (props) => {

    const productosCotizacion = useSelector(state => state.cotizacion)
    
 

    return (
        <>
            <nav className='nav'> 
            <h2>Total Productos: $ { ( productosCotizacion.length ? productosCotizacion.map((e) => ( e.cantidad * e.precio )).reduce((sum, acu) => sum + acu).toFixed(2) : 0) }</h2>
                <button  onClick={() => props.boton(true)}>Ver cotizacion</button> 
            </nav> 
        </>
    )
}

export default Navbar