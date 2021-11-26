const CartItem = ({product, deleteFromCart}) => {
    let{id, name, price, quantity} = product;
    return (
        <div style={{borderBottom:"thin solid grey"}}>
            <h4>{name}</h4>
            <h5>$ {price}.00 x {quantity}=$ {price * quantity}.00</h5>
            <button onClick={()=>deleteFromCart(id)}>Eliminar uno</button>
            <button onClick={()=>deleteFromCart(id, true)}>Eliminar todos</button>
        </div>
    )
}

export default CartItem
