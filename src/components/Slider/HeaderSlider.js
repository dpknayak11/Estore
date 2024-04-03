import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from "../../Images/slider-1.jpg";
import slider2 from "../../Images/slider-2.jpg";
import slider3 from "../../Images/slider-3.jpg";

function HeaderSlider() {
    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="col-md-6">
            <Slider {...settings} className="header-slider normal-slider">
                <div className="header-slider-item">
                    <img src={slider1} alt="Slider Image" />
                    <div className="header-slider-caption">
                        <p>Some text goes here that describes the image</p>
                        <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Shop Now</a>
                    </div>
                </div>
                <div className="header-slider-item">
                    <img src={slider2} alt="Slider Image" />
                    <div className="header-slider-caption">
                        <p>Some text goes here that describes the image</p>
                        <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Shop Now</a>
                    </div>
                </div>
                <div className="header-slider-item">
                    <img src={slider3} alt="Slider Image" />
                    <div className="header-slider-caption">
                        <p>Some text goes here that describes the image</p>
                        <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Shop Now</a>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default HeaderSlider;
