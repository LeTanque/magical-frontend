import React from 'react';

const Testimonials = () => {

    return (
        <>
            <section className="bg-gray-700">
                <div className="container mx-auto px-6 py-20">
                    <h2 className="text-4xl font-bold text-center  text-white mb-8">
                        Testimonials
                    </h2>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <div className="bg-transparent rounded shadow py-2">
                                <p className="text-gray-200 text-base px-6 mb-5">I can't believe all of this magic is just... free!</p>
                                <p className="text-gray-500 text-xs md:text-sm px-6">Harry Potter</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <div className="bg-transparent rounded shadow py-2">
                                <p className="text-gray-200 text-base px-6 mb-5">...this is awesome keep it up looking forward to seeing future versions</p>
                                <p className="text-gray-500 text-xs md:text-sm px-6">Mickey Wells</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <div className="bg-transparent rounded shadow py-2">
                                <p className="text-gray-200 text-base px-6 mb-5">I love the way the buttons click!</p>
                                <p className="text-gray-500 text-xs md:text-sm px-6">Bill the Bassman</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials
