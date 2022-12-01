import React from "react";
import { useSelector } from "react-redux";
import Producto from "../Producto/Producto";


const Home = (props) => {

    const productoRedux = useSelector(state => state.productos)
    
    return(
        <div>
            <h1>ESTE ES EL HOME</h1>
            
            <br />
            Y ESTE ES PRODUCTO {productoRedux[0].nombre}
            <br></br>
            <div className="ContenedorProductos">
                { productoRedux.map(e => <Producto nombre={e.nombre} precio={e.precio}/>)}
            </div>            
        </div>
    )

}

export default Home