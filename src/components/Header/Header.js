import React from 'react';
import { Link } from 'react-router-dom'; // Import Link if using React Router
import logo from "../../Images/logo.png"
function Header() {
    return (
        <div className="bottom-bar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="Logo" /> {/* Adjust image path */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="search">
                            <input type="text" placeholder="Search" />
                            <button><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="user">
                            <Link to="/wishlist" className="btn wishlist"> {/* Adjust routes */}
                                <i className="fa fa-heart"></i>
                                <span>(0)</span>
                            </Link>
                            <Link to="/cart" className="btn cart"> {/* Adjust routes */}
                                <i className="fa fa-shopping-cart"></i>
                                <span>(0)</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
