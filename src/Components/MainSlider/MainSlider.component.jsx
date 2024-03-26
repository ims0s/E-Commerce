import React from 'react'
import Slider from "react-slick";
import slider1 from "../../assets/images/slider-image-1.jpeg"
import slider2 from "../../assets/images/slider-image-2.jpeg"
import slider3 from "../../assets/images/slider-image-3.jpeg"
import blog1 from "../../assets/images/blog-img-1.jpeg"
import blog2 from "../../assets/images/blog-img-2.jpeg"
export default function MainSlider() {
    
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,

        speed: 500,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1
    };
    
    return <>
        <div className="container">
            <div className="row g-0 my-5 pe-5">
                <div className="col-md-8">
                    <Slider {...settings}>
                        <img height={350} src={slider1} alt="" />
                        <img height={350} src={slider2} alt="" />
                        <img height={350} src={slider3} alt="" />
                    </Slider>

                </div>
                <div className="col-md-3">
                    <img height={175} src={blog1} alt="" />
                    <img height={175} src={blog2} alt="" />
                </div>
            </div>

        </div>
    </>
}