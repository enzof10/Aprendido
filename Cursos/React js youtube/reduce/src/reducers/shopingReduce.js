import {TYPES} from "../actions/shoppingActions"
export const shoppingInitialState={
    products:[
        {id:1, name:"Producto1", price:100},
        {id:2, name:"Producto2", price:200},
        {id:3, name:"Producto3", price:300},
        {id:4, name:"Producto4", price:400},
        {id:5, name:"ProductoCinco", price:240},
        {id:6, name:"ProductoSeis", price:140}
    ],
    cart:[]
}

export function shoppingReducer(state, action){
    console.log(state,action )
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            let newItem = state.products.find((product)=> product.id === action.payload);
            // si no coincide ningun el producto a agregar con alguno que haya en en el state
            // retorna nulo
            let itemInCart = state.cart.find((item)=>item.id === newItem.id);

            // si existe: si no existe
            return itemInCart ?
            {
                // hacemos copia del estado con el spread operator
                ...state,
                cart: state.cart.map((item) =>
                 item.id === newItem.id 
                 ? {...item, quantity:item.quantity+1}:
                  item)
            }:{
                ...state,
                cart: [...state.cart,{ ...newItem, quantity:1}]
            }
        }
        case TYPES.REMOVE_ONE_FROM_CART:{
            // encuentra el preducto a eliminar
            let itemToDelete = state.cart.find(item=> item.id === action.payload);
            console.log(itemToDelete)
            return itemToDelete.quantity > 1 ? {
                ...state,
                cart: state.cart.map(item => item.id === action.payload ? {
                    ...item, 
                    quantity: item.quantity -1
                }:{
                    item
                })
            }:{
                // copia del estado
                ...state,
                // modificamos el carrito
                // por cada item evalua....para agregar a esta nueva verison del estado
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }
        case TYPES.REMOVE_ALL_FROM_CART:{
            return{ // copia del estado
                ...state,
                // modificamos el carrito
                // por cada item evalua....para agregar a esta nueva verison del estado
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }
       case TYPES.CLEAR_CART:{
           return shoppingInitialState;
        }
        default:
            return state;


        }
}