import React from "react";
import { useSelector } from "react-redux";
import Producto from "../Producto/Producto";
import './Home.css';
import PopDescripcion from '../PopDescripcion/PopDescripcion';
import PopCotizacion from "../PopCotizacion/PopCotizacion";
import Navbar from "../NavBar/Navbar";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';




const Home = (props) => {

    const [popDescripcion, setPopdescripcion] = React.useState({estado:false , info: {}})
    const [popCotizacion, setPopcotizacion] = React.useState(false)

    const productoRedux = useSelector(state => state.productos)

    const cambioPopdescripcion = (arg) => {
       setPopdescripcion({info: arg, estado: !popDescripcion.estado})
    }

    const notificacionAgregado = () => {
        NotificationManager.success('Listo', 'Producto agregado');
    }

    
    return(
        <>
        <Navbar boton={setPopcotizacion}/>
        <NotificationContainer/>
        <div className="divPrincipal">
            <h1>ESTE ES EL HOME</h1>
            <button onClick={() => notificacionAgregado() }>Pruba notificacion</button>
            <br></br>
            <div className="ContenedorProductos">
                { productoRedux.map((e,i) => <Producto key={i} descriptivo={cambioPopdescripcion} todoProducto={e} notificacion={notificacionAgregado}/>)}
            </div>            
            <PopDescripcion estado={popDescripcion.estado} info={popDescripcion.info} notificacion={notificacionAgregado} cerrar={setPopdescripcion}/>
            <PopCotizacion estado={popCotizacion} cerrar={()=> setPopcotizacion(false) }/>            
        </div>
        </>
    )

}

export default Home