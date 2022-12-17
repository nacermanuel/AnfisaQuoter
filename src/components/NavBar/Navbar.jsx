import React from 'react';
import './Navbar.css'
import { useSelector } from 'react-redux';

const Navbar = () => {

    const productosCotizacion = useSelector(state => state.cotizacion)
    
    //AGREGAR AQUI LA POSIBILIDAD DE ACTIVAR EL COTIZADOR
    // SERA QUE SACO ESTE NAV Y LO LLEVO A HOM EN VEZ DE APP?? 

    return (
        <>
            <nav className='nav'> 
            <h2>Total Productos: $ { ( productosCotizacion.length ? productosCotizacion.map((e) => ( e.cantidad * e.precio )).reduce((sum, acu) => sum + acu).toFixed(2) : 0) }</h2>
                <button>Ver cotizacion</button> 
            </nav> 
        </>
    )
}

export default Navbar