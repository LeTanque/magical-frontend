import React from "react";
import { Keyrune } from "@saeris/react-keyrune";
import { NavLink } from "react-router-dom";
import { useGlobalState } from "../../state";

const Footer = () => {
    const [ navitems ] = useGlobalState("navigation");

    return (
        <div className="flex items-center justify-between flex-wrap bg-gray-800  p-6 pb-32 bottom-0 -mb-8">
            <div className="flex items-start flex-shrink-0 flex-col text-gray-200 mr-6">
                <div className="" >
                    <Keyrune set="leg"  fixed  size="2x" className="text-white" />
                    <NavLink to="/">
                        <span className="font-semibold text-xl tracking-tight">
                            Magical
                        </span>
                    </NavLink>
                </div>
                {navitems && navitems.map((item, index) => (
                    <div className="text-sm md:flex-grow" key={index}>
                        <NavLink to={item.link} className="block mt-4 ml-8 md:inline-block md:mt-0 text-gray-200 hover:text-white mr-4">
                            {item.name}
                        </NavLink>
                    </div>
                ))}
            </div>
            <div className="w-full flex md:items-center md:w-auto">
                <div>
                    <NavLink to="/collection" className="inline-block text-sm px-4 py-2 leading-none border rounded 
                    text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 md:mt-0">
                        Log In
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Footer;
