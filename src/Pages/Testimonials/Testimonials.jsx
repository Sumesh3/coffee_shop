import React, { useEffect } from 'react'

export default function Testimonials() {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infiniteSlides: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <div className='py-14 mb-10'>
            <div className="container">
                <div data-aos="fade-up" className='text-center mb-10'>
                    <h1 className='text-4xl font-bold font-cursive text-gray-800'>Testimonials</h1>
                </div>
            </div>
        </div>
    )

}

