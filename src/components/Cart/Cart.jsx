import "./Cart.scss";

import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import CartItem from "./CartItem/CartItem";

const Cart = ({ setShowCart }) => {
  return (
    <div className="cart-panel">
      <div className="opacity-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>
        {/* Empty Cart Section */}
        {/* <div className="empty-cart">
                <BsCartX/>
                <span>No Products in the Cart.</span>
                <button className="return-cta-btn">RETURN TO SHOP</button>
            </div> */}
        {/* Added Products Cart Section */}

        <></>
        <CartItem />
        <div className="cart-footer">
          <div className="subtotal">
            <div className="text">Subtotal: </div>
            <div className="text total">&#8377;9483</div>
          </div>
          <div className="button">
            <button className="checkout-cta-btn">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
