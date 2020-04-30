import React, { useState } from 'react';
import GetPackCards from "../components/GetPackCards";

// RPCD
const RandomPack = () => {
    const [ randomPackSet, setRandomPackSet ] = useState();
    const [ sets ] = useState([
        { id: "KTK", active: true, name: "Khans of Tarkir" },
        { id: "3ED", active: true, name: "3rd Edition" },
        { id: "CSP", active: true, name: "Coldsnap - Ice Age" },
        { id: "GRN", active: true, name: "Guilds of Ravnica" },
        { id: "RNA", active: true, name: "Ravnica Allegiance" },
        { id: "MH1", active: true, name: "Modern Horizons" },
        { id: "ELD", active: true, name: "Throne of Eldraine" },
        { id: "THB", active: true, name: "Theros Beyond Death" },
        { id: "M19", active: false, name: "Core 19" },
        { id: "IKO", active: false, name: "Ikoria: Lair of Behemoths" },
    ]);
    
    return (
        <>
            <h3 className="text-2xl font-semibold mt-2 pl-2">Open a pack:</h3>
            <ul className="flex flex-wrap border-b">
                {sets.map(set => (
                    <li className="-mb-px mr-1" key={set.id}>
                        <div 
                            className={`bg-white inline-block py-2 px-4  ${set.active ? "cursor-pointer" : "cursor-not-allowed"}
                                ${randomPackSet === set.id ? 
                                    "font-semibold border-l border-t border-r rounded-t text-blue-700" : 
                                    set.active ? "font-base text-blue-400 hover:text-blue-800" : "font-base text-gray-400"}`
                                }
                            onClick={() => setRandomPackSet(set.active ? set.id : "")}
                        >
                            {set.name}
                        </div>
                    </li>
                ))}
            </ul>
            {randomPackSet && (
                <GetPackCards set={randomPackSet.toLowerCase()} />
            )}
        </>
    );
};

export default RandomPack;
