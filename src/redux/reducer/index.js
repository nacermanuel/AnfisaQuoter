import  db  from '../../db.js'

const initialState = db

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case 'AGREGA_COTIZACION':
            if(state.cotizacion.find((e)=> e.id === action.payload)){
                alert("Este producto ya está agregado");
                return {...state}
            } else{
                return {...state, cotizacion: [...state.cotizacion, state.productos.find((e)=> e.id === action.payload),]}
            }
        case 'ELIMINAR_COTIZACION':
            return {...state, cotizacion: [...state.cotizacion.filter((e)=> e.id !== action.payload)]}
        case 'ACTUALIZAR_CANTIDAD':
            return {...state, cotizacion: [...state.cotizacion.map((e) => ( e.id === action.payload.id ? {...e, cantidad: action.payload.value} : {...e}))] }
        default: return {...state}
    }
};

export default rootReducer;