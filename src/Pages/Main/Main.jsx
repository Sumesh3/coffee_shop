import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Home from '../Home/Home'
import AppStore from '../AppStore/AppStore'
import Banner from '../Banner/Banner'
import NavBar from '../../Components/NavBar/NavBar'
import Service from '../Services/Service'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../../Components/Footer/Footer'

export default function Main() {

    useEffect(() => {
        Aos.init(
            {
                offset: 100,
                duration: 700,
                easing: "ease-in",
                delay: 100,
            }
        )
    }
    );

    return (
        <>
            <div className='overflow-x-hidden'>
                <NavBar />
                <Home />
                <Service />
                <Banner />
                <AppStore />
                <Testimonials />
                <Footer />
            </div>
        </>
    )
}
