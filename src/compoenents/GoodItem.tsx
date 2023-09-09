import React from 'react'
import '@/compoenents/style.css';
import '@/style/globals.css';
import PButton from './PButton';

interface Props {
    id: number;
    name: string;
    imgUrl: string;
}

const GoodItem = ({ id, name, imgUrl }: Props) => {
    let url = `/goods/${id}`

    return (
        <div className='goods_item'>
            <img src={imgUrl} className='goods_pic' />
            <div className='slice_space goods_title_c'>
                {name}
            </div>
            <div className='center'>
                <PButton text='more' url={url} />
            </div>
        </div>
    )
}

export default GoodItem;
