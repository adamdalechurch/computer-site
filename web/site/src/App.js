import React, { useEffect, useState } from "react";
import SearchAppBar from './header';
import Home from './home';
import BusinessSupport from './businessSupport';
import Footer from './footer';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  notFound: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)"
  }
}));

export default function App() {
const classes = useStyles();
const config = {phone:"800-555-5555"};
  return (
    <ThemeProvider theme={theme}>
    	<div>
    	<SearchAppBar config={config}/>
    	<Router>
    	<Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/business-support">
            <BusinessSupport />
          </Route>
          {/* to do: add routes: */}
  
        </Switch>
    	</Router>
      <Footer config={config}/>
    	</div>
      </ThemeProvider>
    );
}