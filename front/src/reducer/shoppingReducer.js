import { TYPES } from "../actions/shoppingAction";

//URL DE LA API
const API_DIRECTION = "http://localhost:5000/api/products/";

//CONSUMO DE LA API
const peticion = async() => {
    const response = await fetch(`${API_DIRECTION}`);
    const dat = await response.json();
    renderTheData(dat);
    /*fetch(`${API_DIRECTION}`)
        .then((response) => response.json())
        .then((data) => renderTheData(data));*/
}

//EJECUCIÓN DE LA FUNCIÓN
peticion();

/*FUNCIÓN QUE INSERTA DENTRO DE LA LISTA DE PRODUCTOS LOS ELEMENTOS ENCONTRADOS
EN LA API*/
const renderTheData = (data) => {
    for (let i = 0; i < data.length; i++) {
        shoppingInitialState.productos.push(data[i]);
    }
};

//ESTADOS INICIALES
export const shoppingInitialState = {
    productos: [],
    carrito: [],
};

//FUNCIÓN REDUCTORA
export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART:
            {}
        case TYPES.REMOVE_ONE_FROM_CART:
            {}
        case TYPES.REMOVE_ALL_FROM_CART:
            {}
        case TYPES.CLEAR_CART:
            {}
        default:
            return state;
    }
}