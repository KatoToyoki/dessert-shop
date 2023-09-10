import React, { useState } from 'react'
import '@/style/globals.css';
import { useRouter } from 'next/router';
import { Col, Row } from "react-bootstrap"

import goodsData from '@/pages/goods/goodsData.json';
import NotFound from '@/components/NotFound';
import PButton from '@/components/PButton';


interface Props {
    id: number | null;
    price: number;
    name: string;
    introduction: string;
    sub_title: string;
    sub_content: string;
    calories: string;
    due_date: string;
    ingredients: string;
    imgUrl: string;
}

const EachGoods = () => {
    const router = useRouter();
    const { goodsID } = router.query;
    const id = Array.isArray(goodsID) ? goodsID[0] : goodsID;
    let data: Props = { id: null, price: 0, name: "", introduction: "", sub_title: "", sub_content: "", calories: "", due_date: "", ingredients: "", imgUrl: "" }
    const foundGoods = goodsData.find((goods) => goods.id.toString() === id);

    if (foundGoods) {
        Object.assign(data, foundGoods);
    }

    const isGoodsExist = !!foundGoods;

    const [quality, setQuality] = useState(1);
    const handleAdd = () => setQuality(quality + 1);
    const handleMinus = () => setQuality(quality - 1 < 0 ? quality : quality - 1);

    if (isGoodsExist) {
        return (
            <div className='bg goods_item_p flex-wrapper'>
                <Row>
                    <Col xs={12} md={5} className='goods_bgW'>
                        <div className='goods_img_container flex-wrapper'>
                            <img src={data.imgUrl} className='goods_pic' />

                            <br />

                            <h5>Ingredients:</h5>
                            <p className='goods_texts'>
                                {data.ingredients}
                            </p>

                            <div className='right goods_texts'>
                                ${data.price}/1
                            </div>

                            <hr style={{ opacity: '1' }} />
                            <Row>
                                <Col xs={3} onClick={handleMinus}>
                                    <div className='quantity_f'>
                                        <PButton text='-' url='' />
                                    </div>
                                </Col>

                                <Col xs={6} className='center'>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder={`Quantity: ${quality}`}
                                            className="quantity_box"
                                            value={quality}
                                            onChange={(e) => setQuality(parseInt(e.target.value) || 0)}
                                        />
                                    </div>
                                </Col>

                                <Col xs={3} onClick={handleAdd}>
                                    <div className='quantity_f'>
                                        <PButton text='+' url='' />
                                    </div>
                                </Col>
                            </Row>

                            <br />
                            <PButton text='Add to cart' url='' />
                        </div>

                    </Col>
                    <Col xs={12} md={7}>
                        <div className='goods_contents'>
                            <div id='goods_name'>{data.name}</div>
                            <p className='goods_texts'>
                                {data.introduction}
                            </p>

                            <hr className='title2' />

                            <h5>{data.sub_title} </h5>
                            <p className='goods_texts'>
                                {data.sub_content}
                            </p>

                            <h5>Calories:</h5>
                            <p className='goods_texts'>
                                {data.calories}
                            </p>

                            <h5>Enjoy at its Freshest:</h5>
                            <p className='goods_texts'>
                                {data.due_date}
                            </p>
                        </div>
                    </Col>
                </Row>
            </div >
        )
    }
    else {
        return (
            <NotFound />
        )
    }
}

export default EachGoods;
