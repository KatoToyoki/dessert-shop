import React from 'react'

import beforeData from '@/pages/user/before.json'
import BeforeUser from '@/components/BeforeUser'
import SearchNotFound from '@/components/SearchNotFound'

import { Col, Row } from "react-bootstrap"
import { faUser, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Info from '@/components/Info'
import History from '@/components/History'

const User = () => {
    return (
        // <div>
        //     {/* <SearchNotFound /> */}
        //     {/* <BeforeUser data={beforeData.login} /> */}
        //     {/* <BeforeUser data={beforeData.register} /> */}

        // </div>
        <div className='flex-wrapper userbg'>
            <Row>
                <Col xs={12} md={12}>
                    <img src='/images/user.jpg' />
                </Col>
                <Col xs={12} md={2}>
                    <Row className='userIcon'>
                        <Col xs={12} className='center'>
                            <img src='/images/head.jpg' className='userImg' />
                        </Col>
                        <Col xs={12} className='center'>
                            <h4>John Jonathan</h4>
                        </Col>
                    </Row>

                    <div className='userButton'>
                        <FontAwesomeIcon icon={faUser} className='white_word' /> &nbsp; <span className='white_word'>Personal info</span>
                    </div>
                    <div className='userButton'>
                        <FontAwesomeIcon icon={faFile} className='white_word' /> &nbsp; <span className='white_word'>Order history</span>
                    </div>
                </Col>
                <Col xs={12} md={10} style={{ padding: '6% 10% 6% 10%' }}>
                    {/* <Info /> */}
                    <History />
                </Col>
            </Row>
        </div>
    )
}

export default User
