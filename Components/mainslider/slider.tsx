

import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const slide: React.CSSProperties | undefined = {
    maxHeight: '600px',
    minWidth: '100%'
}

const sliters: { url: string }[] = [
    { url: 'images/sliders/slide.jpeg' },
    { url: 'images/sliders/slide-colors.jpg' },
    { url: 'images/sliders/slide-colors.jpg' },
    { url: 'images/sliders/slide.jpeg' }
]

interface SettingsSlider {
    dots: boolean,
    infinite: boolean,
    speed: number,
    slidesToShow: number,
    slidesToScroll: number,
    arrow: boolean
}

const MainSlider = () => {

    const settings: SettingsSlider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false
    };

    return (

        <Slider {...settings}>

            {sliters.map((e) => <div><img src={e.url} style={slide} /></div>)}


        </Slider>
    );
}

export default MainSlider;