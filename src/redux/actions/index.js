

export const agregaCotizacion = (i) => {
    return { type: 'AGREGA_COTIZACION', payload: i}
}

export const eliminarCotizacion = (i) => {
    return { type: 'ELIMINAR_COTIZACION', payload: i}
}

export const actualizarCantidad = (id, value) => {
    return { type: 'ACTUALIZAR_CANTIDAD', payload: {id, value}}
}