import React,{useState} from 'react'
import CartItem from './CartItem'
import "./Cart.css"

function Cart({initialItems}) {

    const [items, setItems] = useState(initialItems)

    const UpdateQty = (id, newQty) => {
        const newItems = items.map(item => {
            if(item.id === id ) return {...item, qty:newQty }
            return item;
        });
        setItems(newItems);
    }

    const grandTotal = items.reduce((total, item) => (
        total+item.qty*item.price),0).toFixed(2);

    return (
        <div className="Cart">
            <h1 className="cart-title">Shopping Cart</h1>
            <div className="cart-items">
            {items.map(item => (
               <CartItem key={item.id} UpdateQty={UpdateQty} {...item }  />
            ))}
            </div>
            <h2 className="cart-total">Grand Total: ${grandTotal}</h2>
        </div>
    )
}

export default Cart;



