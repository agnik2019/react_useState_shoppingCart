import React from 'react'
import "./CartItem.css"
function CartItem({id,UpdateQty, name,price, qty}) {
    const addOne = () => {
        UpdateQty(id,qty+1);
    }
    const minusOne = () => {
        UpdateQty(id,qty-1);
    }
    return (
        <div className="CartItem">
           <div>{name}</div> 
           <div>${price}</div> 
           <div>
           <button onClick={minusOne} disabled={qty<= 0}>-</button>
           {qty}
           <button onClick={addOne}>+</button>
           </div> 
           <div> Total: ${qty * price}</div> 
        </div>
    )
}

export default CartItem
