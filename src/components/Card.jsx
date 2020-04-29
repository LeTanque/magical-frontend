import React from 'react';


const Card = ({ card }) => {

    const injectCharacters = text => {
        // const regex = /([{1}])/g;
        // const replaced = text.replace(regex, <i className="ms ms-1"></i>);

        let charArr = text.split("")
        for (let i=0; i<charArr.length; i++) {
            if (charArr[i] === "{" && charArr[i+1] === "T") {
                charArr.splice(i, 3, <i className="ms ms-tap"></i>)
            }
            else if (charArr[i] === "{" && (charArr[i+1] === "G" || charArr[i+1] === "B" || charArr[i+1] === "U" || charArr[i+1] === "B" || charArr[i+1] === "W"   )) {
                charArr.splice(i, 3, <i className={`ms ms-${charArr[i+1].toLowerCase()}`}></i>)
            }
        }
        console.log('charArr --> ', charArr);
        return charArr
    }



    return (
        <section className="" style={{ maxWidth: "800px", margin: "20px auto" }}>
            <div className="max-w-full w-full h-100  flex   overflow-hidden  shadow-lg" >
                <div className="h-auto  w-24   sm:w-48  lg:h-auto  lg:w-56  
                    rounded-t lg:rounded-t-none lg:rounded-l 
                    text-center overflow-hidden  flex-none bg-cover" 
                    style={{ 
                        backgroundImage: `url('${card.imageUrl}')`, 
                        backgroundSize: "cover",
                        backgroundRepeat: "repeat",
                        backgroundPosition: "center",
                        transform: "rotate(-10deg) scale(1.3)"
                    }} 
                    title={card.name} >
                </div>
                <div className="border-r  border-b  border-gray-400 
                    lg:border-l-0  lg:border-t  lg:border-gray-400 
                    rounded-b  lg:rounded-b-none  lg:rounded-r 
                    flex  flex-col  justify-between  leading-normal
                    p-4  bg-white  w-full  z-20 "
                >
                    <div className="mb-8">
                        <div className="text-gray-900 font-bold text-2xl">
                            {card.name}
                        </div>
                        <p className="text-sm text-gray-600 flex items-center  mb-3">
                            {card.type}
                        </p>
                        <p className="text-gray-900 text-base">
                            {card.text && injectCharacters(card.text)}
                        </p>
                        {card.flavor && (
                            <p className="text-sm text-gray-700 italic mt-3">
                                {card.flavor}
                            </p>
                        )}
                    </div>
                    <div className="flex items-center">
                        <div className="text-sm">
                            <div className="text-gray-600 leading-none mx-1" >{card.set}</div>
                        </div>
                        <div className="text-sm">
                            <p className="text-gray-600 leading-none mx-1">{card.rarity}</p>
                        </div>
                        <div className="text-sm">
                            <p className="text-gray-600  leading-none mx-1">{card.number}</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 
                            font-semibold hover:text-white py-2 px-4 
                            border border-blue-500 hover:border-transparent rounded"
                        >
                            Add to collection
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Card

