import React from 'react'
import '@/style/globals.css';
import { Col, Row } from "react-bootstrap"
import SearchBar from '@/compoenents/SearchBar';
import GoodItem from '@/compoenents/GoodItem';

import goodsData from '@/pages/goods/goodsData.json'

const Goods = () => {
    return (
        <div className='bg' id='goods_bg'>
            <Row>
                <Col xs={12} md={3}>
                    <span className='titleWhite'>Goods</span>
                </Col>
                <Col md={3} />
                <Col xs={12} md={6} className='right'>
                    <SearchBar />
                </Col>
            </Row>
            <div className='slice_space'>
                <Row>
                    {goodsData.map((data) => {
                        return (
                            <Col xs={12} md={4}>
                                <GoodItem id={data.id} name={data.name} imgUrl={data.imgUrl} />
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}

export default Goods;
