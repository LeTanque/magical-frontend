import React from 'react';
// import { Link } from "react-router-dom";

import Hero from "../components/Landing/Hero";
import About from "../components/Landing/About";
import Testimonials from "../components/Landing/Testimonials";
import Footer from "../components/Landing/Footer";
import CallToAction from "../components/Landing/CallToAction";

const Landing = () => {

    return (
        <>
            <Hero />
            <About />
            <CallToAction />
            <Testimonials />
            <Footer />
        </>
    );
};

export default Landing;
