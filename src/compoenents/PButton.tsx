import React from 'react'
import '@/compoenents/style.css';
import '@/style/globals.css';
import Link from 'next/link';
import { Button } from "react-bootstrap"

interface Props {
    text: string;
    url: string;
}

const PButton = ({ text, url }: Props) => {
    return (
        <div>
            <Link href={url}>
                <Button className="news_button">
                    &nbsp; {text} &nbsp;
                </Button>
            </Link>
        </div >
    )
}

export default PButton
