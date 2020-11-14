import React from 'react';
// import { Link } from "react-router-dom";

import Hero from "./magical/views/Landing/components/Hero";
import About from "./magical/views/Landing/components/About";
import Testimonials from "./magical/views/Landing/components/Testimonials";
import Footer from "./magical/views/Landing/components/Footer";
import CallToAction from "./magical/views/Landing/components/CallToAction";

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
