import { TYPES } from "../actions/shoppingAction";
import MiniCart from "../components/MiniCart";

//URL DE LA API
const API_DIRECTION = "http://localhost:5000/api/products/";

//CONSUMO DE LA API
const peticion = async() => {
    const response = await fetch(`${API_DIRECTION}`);
    const dat = await response.json();
    renderTheData(dat);
};

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
            {
                let newItem = state.productos.find(
                    (producto) => producto._id === action.payload
                );

                let existItem = state.carrito.find(
                    (producto) => producto._id === newItem._id
                );

                return existItem ?
                    {
                        ...state,
                        carrito: state.carrito.map((item) =>
                            item._id === newItem._id ?
                            {...item, quantity: item.quantity + 1 } :
                            item
                        ),
                    } :
                    {
                        ...state,
                        carrito: [...state.carrito, {...newItem, quantity: 1 }],
                    };
            }
        case TYPES.REMOVE_ONE_FROM_CART:
            {
                let inCart = state.carrito.find(
                    (product) => product._id === action.payload
                );

                return inCart.quantity > 1 ?
                    {
                        ...state,
                        carrito: state.carrito.map((item) =>
                            item._id === inCart._id ?
                            {...item, quantity: item.quantity - 1 } :
                            item
                        ),
                    } :
                    {
                        ...state,
                        carrito: state.carrito.filter(
                            (item) => item._id !== action.payload
                        ),
                    };
            }
        case TYPES.REMOVE_ALL_FROM_CART:
            {
                return {
                    ...state,
                    carrito: state.carrito.filter((item) => item._id !== action.payload),
                };
            }
        case TYPES.CLEAR_CART:
            return shoppingInitialState;
        default:
            return state;
    }
}