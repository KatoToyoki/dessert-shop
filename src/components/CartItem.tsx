import React from 'react'
import { Col, Row } from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import goodsData from '@/pages/goods/goodsData.json';

interface Input {
    item_id: number | null,
    quantity: number,
    // updateTotal: any
}

interface Props extends Input {
    name: string,
    imgUrl: string,
    subtotal: number
}

// const CartItem = ({ item_id, quantity, updateTotal }: Input) => {
//     let data: Props = { item_id, quantity, updateTotal, name: "", imgUrl: "", subtotal: 0 };

const CartItem = ({ item_id, quantity }: Input) => {
    let data: Props = { item_id, quantity, name: "", imgUrl: "", subtotal: 0 };

    const matchingGood = goodsData.find((goods) => goods.id === data.item_id);

    if (matchingGood) {
        data.name = matchingGood.name;
        data.imgUrl = matchingGood.imgUrl;
        data.subtotal = matchingGood.price * data.quantity;
    }

    // updateTotal(data.subtotal);

    return (
        <div className='cart_item' style={{ margin: '2% 0 2% 0' }}>
            <Row>
                <Col xs={3} md={1} className='center'>
                    <img src={data.imgUrl} />
                </Col>

                <Col xs={9} md={5} className='center cart_font'>
                    {data.name}
                </Col>

                <Col xs={4} md={2} className='right  cart_font'>
                    x{data.quantity}
                </Col>

                <Col xs={4} md={2} className='right  cart_font'>
                    ${data.subtotal}
                </Col>

                <Col xs={4} md={2} className='right'>
                    <FontAwesomeIcon icon={faTrash} className='trash' />
                </Col>
            </Row>
        </div>
    )
}

export default CartItem
