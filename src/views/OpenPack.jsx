import React, { useEffect, useState } from "react";
import axios from "axios";



const OpenPack = () => {
    const [ cardPack, setCardPack ] = useState({ pack: null, status: null, message: "" });

    const getRandomPack = () => {
        setCardPack({
            pack: null,
            status: "Opening pack...",
            message: "Searching...",
        });

        const URL = `https://api.magicthegathering.io/v1/sets/ktk/booster`;
        axios
            .get(URL)
            .then((response) => {
                console.log('response --> ', response);
                setCardPack({
                    pack: response.data.cards,
                    status: `${response.data.cards.length} cards in pack`,
                    message: "",
                });
            })
            .catch((error) => console.log("getRandomPack error", error));
    };

    useEffect(() => {
        if (!cardPack.pack) getRandomPack()
    }, [cardPack.pack])

    return (
        <>
            <div>
                {cardPack.status ? (
                    <>
                        <h3>STATUS: {cardPack.status}</h3>
                        {cardPack.message ? (
                            <h3>MESSAGE: {cardPack.message}</h3>
                        ) : null}
                    </>
                ) : null}
            </div>
        </>
    );
};

export default OpenPack;
