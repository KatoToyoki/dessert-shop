import CartItem from '@/components/CartItem';
import React, { useState } from 'react'
import PButton from '@/components/PButton';

interface Props {
    item_id: number;
    quantity: number;
}

const Cart = () => {
    let data: Props = { item_id: 0, quantity: 0 };

    let initialData: Props[] = [];
    for (let i = 0; i < 3; i++) {
        const newData: Props = {
            item_id: 2 + i,
            quantity: 3 + 3 * i
        };
        initialData.push(newData);
    }

    const [cartContainer, setCartContainer] = useState<Props[]>(initialData);


    const [total, setTotal] = useState<number[]>([]);
    const [total_count, setTotalCount] = useState(0);

    const updateTotal = (subtotal: number, id: number) => {
        let isExist = false;
        for (let i = 0; i < total.length; i += 2) {
            if (total[i] === id) {
                isExist = true;
            }
        }
        if (!isExist) {
            setTotal((prevTotal) => [...prevTotal, id, subtotal]);
            setTotalCount((prevTotal) => prevTotal + subtotal);
        }
    }

    return (
        <div className='bg flex-wrapper'>
            <span className='titleWhite'>Cart</span>
            {cartContainer.map((data) => {
                return (
                    <CartItem item_id={data.item_id} quantity={data.quantity} updateTotal={updateTotal} />
                )
            })}
            <hr className='white_bg' />
            <div className='center title2'>Total : ${total_count}</div> <br />
            <PButton text='Submit' url='' />
        </div>
    )
}

export default Cart;
