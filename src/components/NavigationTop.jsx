import React from "react";
import { Keyrune } from "@saeris/react-keyrune";
import { NavLink } from "react-router-dom";
import { useGlobalState } from "../state";

const NavigationTop = () => {
    const [ navitems ] = useGlobalState("navigation");

    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800  p-6">
            <div className="flex items-center flex-shrink-0 text-gray-200 mr-6">
                <Keyrune set="leg"  fixed  size="2x" className="text-white" />
                <NavLink to="/">
                    <span className="font-semibold text-xl tracking-tight">
                        Magical
                    </span>
                </NavLink>
            </div>
            <div className="w-full block md:flex md:items-center md:w-auto">
                {navitems && navitems.map((item, index) => (
                    <div className="text-sm md:flex-grow" key={index} >
                        <NavLink to={item.link} className="block mt-4 md:inline-block md:mt-0 text-gray-200 hover:text-white mr-4">
                            {item.name}
                        </NavLink>
                    </div>
                ))}
                <div>
                    <NavLink to="/collection" className="inline-block text-sm px-4 py-2 leading-none border rounded 
                    text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 md:mt-0">
                        Log In
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavigationTop;
