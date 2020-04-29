import React, { useEffect } from "react";
import axios from "axios";
import { setPack, setStatus, setMessage, useGlobalState } from "../state";

import Card from "../components/Card";

const OpenPack = () => {
    const [ packArr ] = useGlobalState("pack")
    const [ status ] = useGlobalState("status")
    const [ message ] = useGlobalState("message")

    const getRandomPack = () => {
        setStatus("Searching...");
        setMessage("Opening pack...");

        const URL = `https://api.magicthegathering.io/v1/sets/ktk/booster`;
        axios
            .get(URL)
            .then((response) => {
                setPack(response.data.cards);
                setStatus(`${response.data.cards.length} cards in pack`);
                setMessage("");
            })
            .catch((error) => console.log("getRandomPack error", error));
    };

    useEffect(() => {
        if (!packArr) getRandomPack()
    }, [packArr])

    console.log('packArr --> ', packArr);

    return (
        <>
            <div>
                {status ? (
                    <>
                        <h3>STATUS: {status}</h3>
                        {message ? (
                            <h3>MESSAGE: {message}</h3>
                        ) : null}
                        {packArr && packArr.length > 0 && packArr.map(card => (
                            <Card card={card} key={card.id} />
                        ))}
                    </>
                ) : null}
            </div>
        </>
    );
};

export default OpenPack;
