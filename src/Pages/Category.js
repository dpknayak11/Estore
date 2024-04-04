import React from 'react';
import category3 from "../Images/category-3.jpg"
import category4 from "../Images/category-4.jpg"
import category5 from "../Images/category-5.jpg"
import category6 from "../Images/category-6.jpg"
import category7 from "../Images/category-7.jpg"
import category8 from "../Images/category-8.jpg"

function Category() {
    return (
        <>
            <div className="category">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="category-item ch-400">
                                <img src={category3} alt="Category" />
                                <a className="category-name" href="#">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="category-item ch-150">
                                <img src={category5} alt="Category" />
                                <a className="category-name" href="#">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                            <div className="category-item ch-250">
                                <img src={category4} alt="Category" />
                                <a className="category-name" href="#">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="category-item ch-150">
                                <img src={category6} alt="Category" />
                                <a className="category-name" href="#">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                            <div className="category-item ch-250">
                                <img src={category7} alt="Category" />
                                <a className="category-name" href="#">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="category-item ch-400">
                                <img src={category8} alt="Category" />
                                <a className="category-name" href="#">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Call to Action Start --> */}
            <div class="call-to-action">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <h1>call us for any queries</h1>
                        </div>
                        <div class="col-md-6">
                            <a href="tel:0123456789">+012-345-6789</a>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Category;
