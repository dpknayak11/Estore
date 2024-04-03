import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import review1 from "../Images/review-1.jpg"
import review2 from "../Images/review-2.jpg"
import review3 from "../Images/review-3.jpg"


function Review() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="review">
            <div className="container-fluid">
                <Slider {...settings}>
                    <div>
                        <div className="review-slider-item">
                            <div className="review-img">
                                <img src={review1} alt="Image" />
                            </div>
                            <div className="review-text">
                                <h2>Customer Name</h2>
                                <h3>Profession</h3>
                                <div className="ratting">
                                    {[...Array(5)].map((star, i) => {
                                        return <i key={i} className="fa fa-star"></i>
                                    })}
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nunc eget
                                    leo finibus luctus et vitae lorem
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="review-slider-item">
                            <div className="review-img">
                                <img src={review2} alt="Image" />
                            </div>
                            <div className="review-text">
                                <h2>Customer Name</h2>
                                <h3>Profession</h3>
                                <div className="ratting">
                                    {[...Array(5)].map((star, i) => {
                                        return <i key={i} className="fa fa-star"></i>
                                    })}
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nunc eget
                                    leo finibus luctus et vitae lorem
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="review-slider-item">
                            <div className="review-img">
                                <img src={review3} alt="Image" />
                            </div>
                            <div className="review-text">
                                <h2>Customer Name</h2>
                                <h3>Profession</h3>
                                <div className="ratting">
                                    {[...Array(5)].map((star, i) => {
                                        return <i key={i} className="fa fa-star"></i>
                                    })}
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nunc eget
                                    leo finibus luctus et vitae lorem
                                </p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Review;
