import React, { useState, useEffect,} from "react";
import { ReactFragment } from "react";

    
const ShoppingCart = (props) => {
    const {shoppingCart , user, product, getUsersCart, increaseQuantity, decreaseQuantity, deleteItemFromCart}  = props;
    const [quantityDidChange, setQuantityDidChange] = useState(false);
    const [didDeleteProduct, setDidDeleteProduct] = useState(false);
    let total = 0;
    shoppingCart.map((item) => {
      total += item.product.price * item.quantity
    })
    useEffect( () =>{
      getUsersCart()
    }, [quantityDidChange, didDeleteProduct])
  
    return (
      <React.Fragment>
        <div className='container'>
          <div className='row'>
            <div className='Col sm={8}'>
                <h1 className="title">{user.user.username}'s Shopping Cart!</h1>
              <div className="total">
                <h4>
                  Total:
                  {total}
                </h4>
              </div>
            </div>
            <div className='Col sm={4}'/>
          </div>
        </div>
        <div className='container'>
        <div className='container fluid'>
          <div className='row d-flex justify-content-center m-1'>
            {shoppingCart.map((item) => {
              <div>{total += item.product.price * item.quantity }</div>
            })}
          </div>
        </div>
        </div>
      </React.Fragment>
    );
  };
  export default ShoppingCart;