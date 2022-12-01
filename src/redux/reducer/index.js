const initialState = {
    productos:
        [
            {nombre: 'Shampoo Gris', precio: 10.43},
            {nombre: 'Crema Vital', precio: 5.63},
            {nombre: 'Acondicionador Fuerte', precio: 6.78},
        ]
  };

const rootReducer = (state = initialState, action) => {
    return {...state}
};

export default rootReducer;