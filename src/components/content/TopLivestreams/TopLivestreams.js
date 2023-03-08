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
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
  };

function TopLivestreams() {
    return (
        <Slider {...settings}>
          <div className="carousel-item">
            <div className="livestream-preview"></div>
          </div>
          <div className="carousel-item">
            <div className="livestream-preview"></div>
          </div>
          <div className="carousel-item">
            <div className="livestream-preview"></div>
          </div>
          <div className="carousel-item">
            <div className="livestream-preview"></div>
          </div>
          <div className="carousel-item">
            <div className="livestream-preview"></div>
          </div>
        </Slider>
    );
}

export default TopLivestreams;
