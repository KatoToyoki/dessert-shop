import CartItem from '@/components/CartItem';
import React, { useState } from 'react'
import boughtData from '@/pages/cart/boughtData.json';

const Cart = () => {
    // const [total, setTotal] = useState(0);
    // const updateTotal = (subtotal: number) => {
    //     setTotal((prevTotal) => prevTotal + subtotal);
    // }

    return (
        <div className='bg flex-wrapper'>
            <span className='titleWhite'>Cart</span>
            {boughtData.map((data) => {
                return (
                    <CartItem item_id={data.item_id} quantity={data.quantity} />
                    // <CartItem item_id={data.item_id} quantity={data.quantity} updateTotal={updateTotal} />
                )
            })}
            <hr className='white_bg' />
            {/* <div className='center title2'>Total : {total}</div> */}
        </div>
    )
}

export default Cart;
