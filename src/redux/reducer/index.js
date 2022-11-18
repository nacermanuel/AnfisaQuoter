const initialState = {
    productos: [
        {nombre: 'Shampoo 1', precio: 10},
        {nombre: 'Crema 1', precio: 5},
    ]
  };

const rootReducer = (state = initialState, action) => {
    return {...state}
};

export default rootReducer;