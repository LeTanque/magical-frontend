import React from 'react';
import { Keyrune } from "@saeris/react-keyrune";

const Hero = () => (
    <section>

        <div className="py-20" style={{ background: "linear-gradient(90deg, #f9aa8f 0%, #aae0fa 100%)" }}>
            <div className="container mx-auto px-6">
                <h2 className="-ml-4 mb-2 text-gray-800 flex items-center">
                    <Keyrune set="leg"  fixed  size="4x" className="" />
                    <span className="text-5xl font-black">
                        Magical
                    </span> 
                </h2>
                <h3 className="text-xl mb-8 text-gray-800">
                    MTG card collection tools
                </h3>
                <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                    Log In
                </button>
            </div>
        </div>

    </section>
);


export default Hero;
