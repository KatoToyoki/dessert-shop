import React from 'react'
import { Col, Row } from "react-bootstrap"
import PButton from './PButton';
import InfoItem from './InfoItem';

const Info = () => {
    return (
        <div className=''>
            <div>Personal info</div>
            <hr style={{ opacity: '1' }} />
            <InfoItem text="name" isMore={false} />
            <InfoItem text="Email Address" isMore={false} />
            <InfoItem text="Address" isMore={true} />
            <PButton text='Save' url='' />
        </div>
    )
}

export default Info;
