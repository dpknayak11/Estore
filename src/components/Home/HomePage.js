import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import MainSlider from '../Slider/MainSlider'
import BrandSlider from '../BrandSlider/BrandSlider'
import Feature from '../../Pages/Feature'
import Review from '../../Pages/Review'
import Footer from '../Footer/Footer'
import Category from '../../Pages/Category'

function HomePage() {
    return (
<>
<Navbar />
<Header />
<MainSlider />
<BrandSlider />
<Feature />

<Category />


<Review />
<Footer />
</>
    )
}

export default HomePage