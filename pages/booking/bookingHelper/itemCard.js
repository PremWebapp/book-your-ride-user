import React from 'react'
import style from "../booking.module.css"

function ItemCard() {
    return (
        <div>
            <div class={`${style.cardRound} card mb-4 mt-3 `} >
                <div class="row px-3 ">
                    <div class="col-md-2 m-auto">
                        <img className='p-2 ' width='180px' height='110px' src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200" class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-5">
                        <div class="px-4">
                            <p className={`${style.itemCardName} mt-3`}>Name</p>
                            <p className={`${style.itemCarDate}`}>Date:8 December 2019 → 8 Dec 2019 </p>
                            <p className={`${style.itemCarPrice}`}>Price:1000</p>
                            <p className="fw-bolder">See More <i class="fa-solid fa-angle-right"></i></p>
                        </div>
                    </div>
                    <div class="col-md-5 d-flex justify-content-sm-end justify-content-md-end justify-content-lg-end justify-content-start ">
                        <div class="px-4">
                            <p className={`${style.itemCarDate} text-dark  mt-3`}>Distance: 1100km </p>
                            <p className={`${style.itemCarDate}  text-dark`}>Extra Fare: 12/km </p>
                            <p className={`${style.itemCarDate}  text-dark`}>Pay 25% Advance </p>
                            <button className='bg-danger border-0 text-white px-3 mt-3'>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard