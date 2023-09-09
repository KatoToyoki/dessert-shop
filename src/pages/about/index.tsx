import React from 'react'
import '@/style/globals.css';
import { Col, Row } from "react-bootstrap"

const About = () => {
    let images = [];
    for (let i = 0; i < 6; i++) {
        let imageUrl = `/images/about${i + 1}.jpg`;
        let divStyle = {
            background: `url(${imageUrl}) center/cover no-repeat`,
            width: '100%',
            paddingBottom: '100%',
            borderRadius: '30px 30px 0 0',
        };

        images.push(
            <Col xs={2} key={i} >
                <div className="col-xs-2" key={i} style={divStyle}></div>
            </Col>
        )
    }

    return (
        <div id='about_bg'>
            <div id='about'>
                <span id='about_title' className='center'>
                    About
                </span>
                <div id='about_content'>
                    <p>
                        Step into a world of sugary dreams with our Whimsical Wonderland concept. Immerse yourself in the enchanting allure of bubble gum shades and vibrant colors that mirror the delectable spectrum of macarons. Each dessert is a masterpiece of artistry and taste, celebrating the joy of indulgence.
                    </p>
                    <br />
                    <p>
                        Get ready for a Flavor Fiesta that's as vibrant as it is delicious. Our dessert shop celebrates the exuberance of bubble gum tones and a riot of colors, reflecting the kaleidoscope of macarons. We're here to redefine your dessert experience with our finest-quality confections.
                    </p>
                    <br />
                    <p>
                        Step into a world of Chroma Confections where colors dance like macarons, and desserts are a testament to culinary excellence. Our dessert shop embraces the lively bubble gum palette, infusing each creation with a burst of vibrancy that's a treat for the eyes and the taste buds.
                    </p>
                    <br />
                    <p>
                        Indulge in a world where bubble gum shades, vibrant colors, and the finest quality desserts converge to create a feast for the senses. Whichever concept resonates with you, our dessert shop is here to bring the magic of macarons to your table.
                    </p>
                </div>
            </div>
            <Row>
                {images}
            </Row>
        </div>
    )
}

export default About
