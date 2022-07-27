import React from 'react'
import style from "../booking.module.css"

function Description() {
    return (
        <div className='p-4'>
            <p className={`${style.filterLabel}`}>Fare Details</p>
            <ul>
                <li className=''>Rs. 12/-Per Km </li>
                <li className=''>Rs. 12/-Per Km </li>
                <li className=''>Rs. 12/-Per Km </li>
                <li className=''>Rs. 12/-Per Km </li>
            </ul>
        </div>
    )
}

export default Description