import React from 'react';
import { useGlobalState } from "../state";

const Status = () => {
    const [ status ] = useGlobalState("status");
    const [ message ] = useGlobalState("message");

    return (
        <div className="text-gray-400 flex flex-col items-center sticky bottom-0 z-20">
            {status ? (
                <p>Status: {status}</p> 
            ) : null}
            {message ? (
                <p>Message: {message}</p> 
            ) : null}
        </div>
    );
};

export default Status;
