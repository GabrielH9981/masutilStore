import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./home";
import Products from "./products";
import Register from "./register";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Products }  path="/products" />
           <Route component = { Register }  path="/register" />
       </BrowserRouter>
   )
}

export default Routes;