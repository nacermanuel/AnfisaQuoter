import React from "react";
import Producto from "../Producto/Producto";


const Home = (props) => {
    
    return(
        <div>
            ESTE ES EL HOME es {props.prueba}
            <br></br>
            <Producto/>
        </div>
    )

}

export default Home