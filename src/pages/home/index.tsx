import React from 'react'
import '@/style/globals.css';
import { Col, Row } from "react-bootstrap"
import News from '@/compoenents/News';

import newsData from '@/pages/home/newsData.json'

const Home = () => {
    return (
        <div>
            <img src='images/home.png' className='home_pic'></img>
            <span id='home_page_title'>Pastel</span>
            <span id='home_page_content'>
                Explore the magic, colorful delights,
                <br />just a click away.
            </span>
            <div id='home_page_back1' />
            <div id='home_page_back2' />

            <div className='space'>
                <Row>
                    {newsData.map((data) => {
                        return (
                            <Col xs={12} md={4}>
                                <News imgUrl={data.imgUrl} title={data.title} />
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}

export default Home
