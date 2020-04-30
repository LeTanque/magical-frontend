import React from 'react';
import { Keyrune } from "@saeris/react-keyrune";

const Card = ({ card }) => {

    const injectCharacters = text => {
        let charArr = text.split("")
        for (let i=0; i<charArr.length; i++) {
            if (charArr[i] === "{" && charArr[i+1] === "T") {
                charArr.splice(i, 3, <i className="text-black p-1 align-top ms ms-tap" key={Math.random()}></i>)
            }
            else if (charArr[i] === "{" && (charArr[i+1] === "G" || charArr[i+1] === "R" 
            || charArr[i+1] === "U" || charArr[i+1] === "B" || charArr[i+1] === "W")) {
                charArr.splice(i, 3, <i className={`bg-${charArr[i+1].toLowerCase()}-500 text-black 
                rounded-full p-1 text-sm align-baseline ms ms-${charArr[i+1].toLowerCase()}`} key={Math.random()}></i>)
            }
            else if (charArr[i] === "{" && (charArr[i+1] === "1" || charArr[i+1] === "2" 
            || charArr[i+1] === "3" || charArr[i+1] === "4" || charArr[i+1] === "5" 
            || charArr[i+1] === "6" || charArr[i+1] === "7" || charArr[i+1] === "8"  
            || charArr[i+1] === "9" || charArr[i+1] === "10" || charArr[i+1] === "11" 
            || charArr[i+1] === "12" || charArr[i+1] === "13" || charArr[i+1] === "14" 
            || charArr[i+1] === "15" || charArr[i+1] === "16" || charArr[i+1] === "17" 
            || charArr[i+1] === "18" || charArr[i+1] === "19" || charArr[i+1] === "20"
            || charArr[i+1] === "X" || charArr[i+1] === "Y" || charArr[i+1] === "Z" || charArr[i+1] === "C")) {
                charArr.splice(i, 3, <i className={`bg-gray-400 text-black rounded-full p-1 
                text-sm align-baseline ms ms-${charArr[i+1].toLowerCase()}`} key={Math.random()}></i>)
            }
        }
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
                        transform: card.imageUrl ? "rotate(-10deg) scale(1.3)" : "none"
                    }} 
                    title={card.name} 
                >
                    {!card.imageUrl ? (
                        <div className="text-gray-400 leading-none mx-1 flex justify-center items-center flex-col h-full" >
                            <Keyrune set="unglued"  fixed  size="4x" />
                            Card picture missing
                        </div>
                    ) : null}
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
                            <span className="mr-2" >{card.type}</span>
                            {card.manaCost ? (
                                <>
                                    |<span className="mx-2" >{card.manaCost && injectCharacters(card.manaCost)}</span>
                                    |<span className="mx-2" >CMC: {card.cmc}</span>
                                </>
                            ) : null}
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
                    <div className="flex items-center  justify-between">
                        <div className="text-sm flex">
                            {card.set ? (
                                <div className="text-gray-600 leading-none mx-1" >
                                    <Keyrune set={`${card.set.toLowerCase()}`}  fixed  size="3x" rarity={card.rarity.toLowerCase()} />
                                </div>
                            ) : null}
                            <div className="flex flex-col">
                                <div className="text-sm">
                                    <p className="text-gray-600  leading-none mx-1">{card.set}</p>
                                </div>
                                <div className="text-sm">
                                    <p className="text-gray-600  leading-none mx-1">{card.number}</p>
                                </div>
                                <div className="text-sm">
                                    <p className="text-gray-600  leading-none mx-1">{card.rarity}</p>
                                </div>
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
            </div>
        </section>
    );
};


export default Card

