import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/login";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
