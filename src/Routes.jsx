import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./views/Login";
import Collection from "./views/Collection";
import Landing from "./views/Landing";
import RandomPack from "./views/RandomPack";
import Dashboard from "./views/Dashboard";

import NavigationTop from "./components/NavigationTop";
import Status from "./components/Status";

const Routes = () => {

    return (
        <BrowserRouter>
            <NavigationTop />


            <Route exact path="/" 
                component={Landing}
            />

            <Route exact path="/random-pack" 
                component={RandomPack}
            />

            <Route exact path="/dashboard" 
                component={Dashboard}
            />


            <Route exact path="/collection" 
                component={Collection}
            />
            <Route exact path="/login" 
                component={Login}
            />

            <Status />
        </BrowserRouter>
    );
};

export default Routes;
