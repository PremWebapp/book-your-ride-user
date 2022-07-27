import React from 'react'
import style from "../booking.module.css"

function DetilsTextCard() {
  return (
    <div className="d-flex justify-content-center">
        <div className={` ${style.detilText}`}>
            <h2 className="fw-bold">Swift</h2>
            <p className="fs-3 mb-1">Tour & Traveller Name</p>
            <p className="fs-3">89865422142</p>
        </div>
    </div>
  )
}

export default DetilsTextCard