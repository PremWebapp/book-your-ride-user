import React from 'react'
import Slider from "react-slick";
import style from "../booking.module.css"
import { useEffect, useState, useRef } from "react";

function DetailImageCard() {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    //i dont seem to need this
    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, []);

    return (
        <div >
            <Slider arrows={false} className="mainSlider" asNavFor={nav2} ref={slider1}>
                <div>
                    <img className={`${style.detilsImage} px-2`} src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
                </div><div>
                    <img className={`${style.detilsImage} px-2`} src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
                </div><div>
                    <img className={`${style.detilsImage} px-2`} src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
                </div><div>
                    <img className={`${style.detilsImage} px-2`} src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
                </div><div>
                    <img className={`${style.detilsImage} px-2`} src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
                </div>
            </Slider>

            <Slider
                asNavFor={nav1}
                ref={slider2}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
            >
                <div>
                    <img className={`${style.detilsImage} px-2`} src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
                </div><div>
                    <img className={`${style.detilsImage} px-2`} src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
                </div><div>
                    <img className={`${style.detilsImage} px-2`} src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
                </div><div>
                    <img className={`${style.detilsImage} px-2`} src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
                </div><div>
                    <img className={`${style.detilsImage} px-2`} src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
                </div>
            </Slider>
        </div>



        // return (
        //     <div>
        //         <div>
        //             <img className={`${style.detilsImage}`} src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />

        //         </div>
        //         <div className="py-5">
        //             <Slider {...settings}>
        //                 <div>
        //                     <img className={`${style.detilsImage} px-2`} src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
        //                 </div>
        //                 <div>
        //                     <img className={`${style.detilsImage} px-2`} src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
        //                 </div>
        //                 <div>
        //                     <img className={`${style.detilsImage} px-2`} src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
        //                 </div>
        //                 <div>
        //                     <img className={`${style.detilsImage} px-2`} src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
        //                 </div>
        //                 <div>
        //                     <img className={`${style.detilsImage} px-2`} src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
        //                 </div>
        //                 <div>
        //                     <img className={`${style.detilsImage} px-2`} src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
        //                 </div>
        //                 <div>
        //                     <img className={`${style.detilsImage} px-2`} src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
        //                 </div>
        //                 <div>
        //                     <img className={`${style.detilsImage} px-2`} src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
        //                 </div>
        //                 <div>
        //                     <img className={`${style.detilsImage} px-2`} src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
        //                 </div>
        //             </Slider>
        //         </div>
        //     </div>
    )
}

export default DetailImageCard