import React from 'react';

const CallToAction = () => {

    return (
        <>
            <div style={{ 
                background: "url(https://res.cloudinary.com/letanque/image/upload/v1588205192/magical-frontend/veeterzy-sMQiL_2v4vs-unsplash_bbd6fb.jpg)", 
                height: "600px",
                width: "100%",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
            }}>
                
            </div>

            <section style={{ 
                backgroundColor: "rgba(102, 192, 234, 0.75)", 
                maxHeight: "600px", 
                marginTop: "-600px" 
            }}>
                <div className="container mx-auto px-6 text-center py-20">
                    <h2 className="mb-6 text-4xl font-bold text-center text-gray-800">
                        Give RPCD a spin, today!
                    </h2>
                    <div className="text-6xl" >
                        <span role="img" aria-label="Super awesome">🤩🤩🤩</span>
                    </div>
                    <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider" >
                        Open Pack
                    </button>
                </div>
            </section>
        </>
    );
};

export default CallToAction
