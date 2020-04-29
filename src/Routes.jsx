import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./views/Login";
import OpenPack from "./views/OpenPack";

const Routes = () => {

    return (
        <BrowserRouter>



            <Route exact path="/" 
                component={OpenPack}
            />
            <Route exact path="/login" 
                component={Login}
            />



        </BrowserRouter>
    );
};

export default Routes;
