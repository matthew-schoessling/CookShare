import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TopLivestreams.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
}; 

function TopLivestreams() {
    return (
        <Slider {...settings}>
          <div class="livestream-preview"></div>
          <div class="livestream-preview"></div>
          <div class="livestream-preview"></div>
          <div class="livestream-preview"></div>
          <div class="livestream-preview"></div>
        </Slider>
    );
}

export default TopLivestreams;
