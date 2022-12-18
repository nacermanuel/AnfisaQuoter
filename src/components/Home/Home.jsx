import React from "react";
import { useSelector } from "react-redux";
import Producto from "../Producto/Producto";
import './Home.css';
import PopDescripcion from '../PopDescripcion/PopDescripcion';
import PopCotizacion from "../PopCotizacion/PopCotizacion";
import Navbar from "../NavBar/Navbar";


const Home = (props) => {

    const [popDescripcion, setPopdescripcion] = React.useState({estado:false , info: {}})
    const [popCotizacion, setPopcotizacion] = React.useState(false)

    const productoRedux = useSelector(state => state.productos)

    const cambioPopdescripcion = (arg) => {
       setPopdescripcion({info: arg, estado: !popDescripcion.estado})
    }

    
    return(
        <>
        <Navbar boton={setPopcotizacion}/>
        <div className="divPrincipal">
            <h1>ESTE ES EL HOME</h1>
            <br></br>
            <div className="ContenedorProductos">
                { productoRedux.map((e,i) => <Producto key={i} descriptivo={cambioPopdescripcion} todoProducto={e}/>)}
            </div>            
            <PopDescripcion estado={popDescripcion.estado} info={popDescripcion.info} cerrar={setPopdescripcion}/>
            <PopCotizacion estado={popCotizacion} cerrar={()=> setPopcotizacion(false) }/>
            
        </div>
        </>
    )

}

export default Home