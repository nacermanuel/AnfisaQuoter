// PRIMERO UNA PRUEBA SOLO PASANDO ID: 1
// LUEGO CORREGIR Y HACER QUE RECIBA EL ID COMO PARAMETRO Y QUE LO ENVIE

export const agregaCotizacion = (i) => {
    return { type: 'AGREGA_COTIZACION', payload: i}
}

export const eliminarCotizacion = (i) => {
    return { type: 'ELIMINAR_COTIZACION', payload: i}
}