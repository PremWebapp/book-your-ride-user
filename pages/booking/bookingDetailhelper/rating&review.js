import React from 'react'
import style from "../booking.module.css"
import { Rate } from 'antd';
function RatingCard() {
    return (
        <div className='border-bottom border-2 p-4'>
            <div className='d-flex px-5  '>
                <img className={`${style.ratingImg} shadow-lg`} src='https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg' />
                <div className='px-5 my-auto'>
                    <p className='fs-4 fw-bolder mb-0'>Joe</p>
                    <p className='mb-0 text-secondary'>example@gmail.com</p>
                    <p className='mt-0'><Rate allowHalf defaultValue={2.5} /></p>
                </div>
            </div>
            <div className="mb-0">
                <p className='mb-0'>Deserunt dolor consectetur velit proident reprehenderit magna Lorem amet. Tempor esse adipisicing eiusmod nulla fugiat commodo amet do pariatur qui ullamco nostrud duis. Labore dolore occaecat elit culpa cillum eiusmod est nostrud do.</p>
            </div>
        </div>
    )
}

export default RatingCard