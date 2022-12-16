const initialState = {
    productos:
        [
            {id:1, cantidad:1, nombre: 'Shampoo KeraCare 500ml', precio: 10.43, img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},
            {id:2, cantidad:1, nombre: 'Crema ArganCare 300ml', precio: 5.63,  img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},
            {id:3, cantidad:1, nombre: 'Acondicionador KeraCare 500ml', precio: 6.78, img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},
            {id:4, cantidad:1, nombre: 'Mascarilla Semi de Lino 500ml', precio: 10.43, img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},
            {id:5, cantidad:1, nombre: 'Mascarilla KeraCare 500ml', precio: 15.32,  img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},
            {id:6, cantidad:1, nombre: 'Shampoo Anticaída Bioexil 400ml', precio: 4.21, img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},
            {id:7, cantidad:1, nombre: 'Acondicionador Anticaída Bioexil 400ml', precio: 5.63,  img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},
            {id:8, cantidad:1, nombre: 'Loción Anticaída Bioexil 120ml', precio: 6.78, img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},
            {id:9, cantidad:1, nombre: 'Shampoo Caviar 400ml', precio: 10.43, img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},
            {id:10, cantidad:1, nombre: 'Acondicionador Caviar 400ml', precio: 15.32,  img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},

        ],
    cotizacion: []
  };

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