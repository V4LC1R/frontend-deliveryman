import React, { Component } from "react";
import {BrowserRouter,Route,Switch,Redirect,RouteProps} from 'react-router-dom'
import { Home } from "./app/pages/Home";

interface PrivateRoutesProps extends RouteProps{
    component? : any;
    children?:any;
}

function PrivateRoute(props : PrivateRoutesProps) {
    const isAuthenticated = true;

    const { component : Component, children, ...rest} = props

    return (
        <Route
          {...rest}
          render={routeProps =>
            isAuthenticated ? (
                <Component {...routeProps} />
            ) : (
              <Redirect
                to={{
                  pathname: '/',
                  state: { from: routeProps.location },
                }}
              />
            )
          }
        />
      );
}

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component ={Home}/>
                <PrivateRoute path="/privado" component={()=><h1>Exclusivo</h1>}/>
            </Switch>
        </BrowserRouter>
    );
}


