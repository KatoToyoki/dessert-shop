import React from 'react'
import '@/style/globals.css';
import { useRouter } from 'next/router';
import { Col, Row } from "react-bootstrap"

import newsData from '@/pages/home/newsData.json'
import NotFound from '@/compoenents/NotFound';

interface Props {
    id: number | null;
    imgUrl: string;
    title: string;
    date: string;
    smallTitle: string;
    content: string;
}

const EachNews = () => {
    const router = useRouter();
    const { newsID } = router.query;
    const id = Array.isArray(newsID) ? newsID[0] : newsID;
    let isNewsExist: boolean = false;
    let data: Props = { id: null, imgUrl: "", title: "", date: "", smallTitle: "", content: "" };

    for (var i = 0; i < newsData.length; i++) {
        let news = newsData[i];
        if (news.id.toString() == id) {
            isNewsExist = true;
            data = newsData[i];
            break;
        }
    }

    if (isNewsExist) {
        return (
            <div id='news' className='space'>
                <div id='news_bg'>
                    <Row>
                        <Col xs={12} md={4} >
                            <img src={data.imgUrl} />
                        </Col>
                        <Col xs={12} md={8}>
                            <h4 className='title2'>{data.title}</h4> <br />
                            <span className='right'>{data.date}</span>
                            <hr /><br />
                            <p>{data.smallTitle}</p>
                            <p>{data.content}</p>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
    else {
        return (
            <NotFound />
        )
    }
}

export default EachNews;
