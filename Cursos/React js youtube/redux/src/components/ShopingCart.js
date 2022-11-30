import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, delFromCart } from "../actions/shoppingActions";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShopingCart = () => {
    const state = useSelector(state => state)
    //  (state) {contador:0}
    const dispatch = useDispatch();
  const { products, cart } = state.shoping;

  return (
    <div>
      <h2>Carrito de compras</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={() => dispatch (addToCart(product.id))}
          />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={() => dispatch(clearCart())}>Limpiar carrito</button>
        {cart.map((product, index) => (
          <CartItem
            key={index}
            product={product}
            deleteOneFromCart={() => dispatch(delFromCart(product.id))}
            deleteAllFromCart={() => dispatch(delFromCart(product.id,true))}
          />
        ))}
      </article>
    </div>
  );
};

export default ShopingCart;
