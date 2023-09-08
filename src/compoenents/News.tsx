import React from 'react'
import '@/compoenents/style.css';
import '@/style/globals.css';

import { Button } from "react-bootstrap"

interface Props {
    imgUrl: string;
    title: string;
}

const News = ({ imgUrl, title }: Props) => {
    return (
        <div>
            <img src={imgUrl} className='new_pic_c' />

            <div className='space'>
                <span className='news_title_c '>{title}</span>
            </div>

            <div className="center">
                <a href={"/result"} >
                    <Button className="news_button">
                        &nbsp; more &nbsp;
                    </Button>
                </a>
            </div>
            <br />
        </div>
    )
}

export default News