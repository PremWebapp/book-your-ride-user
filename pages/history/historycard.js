import React from 'react'
import style from "../booking/booking.module.css"

function Historycard() {
  return (
    <>
      <div class={`${style.cardRound} card mb-4 mt-3 `} >
        <div class="row px-3 ">
          <div class="col-md-2 m-auto">
            <img className='p-2' src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200" class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-5 py-3">
            <div class="px-4">
              <p className=' fs-4 fw-bolder mb-0'>Name</p>
              <p >Swift </p>
              <p className=' fw-bolder'>Details</p>
              <p className='fs-6 fw-bolder'>Outstation</p>
              <p className='fs-6 fw-bolder'>Cab round trip</p>
              
            </div>
          </div>
          <div class="col-md-5 d-flex justify-content-sm-end justify-content-md-end justify-content-lg-end justify-content-start py-3 ">
            <div class="px-4">
              <p className={`${style.itemCarDate} text-dark  mt-3`}>Distance: 1100km </p>
              <p className={`${style.itemCarDate}  text-dark`}>Extra Fare: 12/km </p>
              <p className={`${style.itemCarDate}  text-dark`}>Pay 25% Advance </p>
              <button className='bg-danger border-0 text-white px-3 mt-3'>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Historycard