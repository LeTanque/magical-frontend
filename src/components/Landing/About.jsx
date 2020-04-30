import React from 'react';
import { Keyrune } from "@saeris/react-keyrune";

const About = () => (
    <section className="container mx-auto px-6 p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            What is Magical?
        </h2>
        <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2">
                <h4 className="text-2xl text-gray-800 font-bold mb-3">RPCD<span className="text-xs" style={{ verticalAlign: "super" }}>&reg;</span></h4>
                <p className="text-gray-600 mb-8">
                    Our Random Pack Card Discovery (RPCD) interface gives you the ability to discovery cards from across the ages of MTG, 
                    picking and choosing your favorites to add to your own customized collection. 
                </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <Keyrune set="ugl"    foil size="6x" className="" rarity="mythic" />
            </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2 flex justify-center">
                <Keyrune set="iko"    foil size="6x" className="" rarity="mythic" />
            </div>
            <div className="w-full md:w-1/2">
                <h4 className="text-2xl text-gray-800 font-bold mb-3">Search</h4>
                <p className="text-gray-600 mb-8">
                    Our AI powered search utility gives you super-human insight to the MTG universe; able to view any card from any set at a moments notice. 
                    And add it to your collection, if you choose! 
                </p>
            </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2">
                <h4 className="text-2xl text-gray-800 font-bold mb-3">Collection</h4>
                <p className="text-gray-600 mb-8">
                    Save your favorites in your virtual collection for later purchase, deck formation, or just because they are so cool. With Magical, you have the power!
                </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <Keyrune set="ice"    foil size="6x" className="" rarity="mythic" />
            </div>
        </div>
    </section>
);


export default About;
