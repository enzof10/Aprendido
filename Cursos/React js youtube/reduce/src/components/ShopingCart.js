import { useReducer } from "react";
import { TYPES } from "../actions/shoppingActions";
import { shoppingInitialState, shoppingReducer } from "../reducers/shopingReduce";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem"

const ShopingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const {products, cart} = state;
    // console.log(products, state)


    const addToCart =(id)=>{
        dispatch({type:TYPES.ADD_TO_CART, payload:id})
    }

    const deleteFromCart =(id, all = false)=>{
        if(all){
            dispatch({type:TYPES.REMOVE_ALL_FROM_CART, payload:id})
        }else{
        dispatch({type:TYPES.REMOVE_ONE_FROM_CART, payload : id})
        }
    }

    const clearCart =()=>{
        dispatch({type:TYPES.CLEAR_CART})
    }
    return (
        <div>
            <h2>Carrito de compras</h2>
            <h3>Productos</h3>
            <article className="box grid-responsive">
                {products.map((product)=> 
                <ProductItem 
                key={product.id} 
                product={product}
                addToCart={addToCart}/>)}
            </article>
            <h3>Carrito</h3>
            <article className="box">
                <button onClick={clearCart}>Limpiar carrito</button>
                {
                    cart.map((product, index)=> 
                    <CartItem 
                    key={index} 
                    product={product}
                    deleteFromCart={deleteFromCart}
                    />)
                }
            </article>
        </div>
    )
}

export default ShopingCart
