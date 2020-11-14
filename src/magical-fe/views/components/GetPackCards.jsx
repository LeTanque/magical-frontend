import React, { useEffect } from "react";
import axios from "axios";
import { setPack, setStatus, setMessage, useGlobalState } from "state/state";

import Card from "./Card";

const OpenPack = ({ set }) => {
    const [ packArr ] = useGlobalState("pack");

    const getRandomPack = (set) => {
        setStatus("GET request sent");
        setMessage("Opening pack...");
        axios
            .get(`https://api.magicthegathering.io/v1/sets/${set}/booster`)
            .then((response) => {
                setPack(response.data.cards);
                setStatus(`${response.data.cards.length} cards in pack`);
                setMessage("");
            })
            .catch((error) => {
                if (error.request) {
                    console.log("OpenPack request error", error.request);
                    setStatus(`${error.request.status}`);
                    setMessage("Error opening pack");
                }
                else if (error.response) {
                    console.log("OpenPack response error", error.response);
                    setStatus(`${error.response.status}`);
                    setMessage("Error opening pack");
                }
                else {
                    console.log("OpenPack general error", error.message);
                    setStatus(`${error.message}`);
                    setMessage("Error opening pack");
                }
                console.log(error.config);
            });
    };

    useEffect(() => {
        getRandomPack(set)

    }, [set]);


    return (
        <>
            {packArr ? (
                <>
                    {packArr.length > 0 && packArr.map(card => (
                        <Card card={card} key={card.id} />
                    ))}
                </>
            ) : null}
        </>
    );
};

export default OpenPack;
