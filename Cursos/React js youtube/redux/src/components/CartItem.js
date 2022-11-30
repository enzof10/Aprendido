const CartItem = ({product, deleteOneFromCart,deleteAllFromCart}) => {
    let{id, name, price, quantity} = product;
    return (
        <div style={{borderBottom:"thin solid grey"}}>
            <h4>{name}</h4>
            <h5>$ {price}.00 x {quantity}=$ {price * quantity}.00</h5>
            <button onClick={()=>deleteOneFromCart(id)}>Eliminar uno</button>
            <button onClick={()=>deleteAllFromCart(id, true)}>Eliminar todos</button>
        </div>
    )
}

export default CartItem
