import React, { useEffect, useState } from "react";
import SearchAppBar from './header';
import Home from './home';
import BusinessSupport from './businessSupport';
import ITConsulting from './itConsulting';
import HomeSolutions from './homeSolutions';
import About from './about';
import Contact from './contact';
// import Contact from './contact';
// import PrivacyPolicy from './privacyPolicy';
// import TermsOfService from './termsOfService';
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
          <Route path="/it-consulting">
            <ITConsulting />
          </Route>
          <Route path="/home-solutions">
            <HomeSolutions />
          </Route>
          <Route path="/about">
            <About />
          </Route>
           <Route path="/contact">
            <Contact config={config}/>
          </Route>
          {/*<Route path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route path="/terms-of-service">
            <TermsOfService />
          </Route> */}
        </Switch>
    	</Router>
      <Footer config={config}/>
    	</div>
      </ThemeProvider>
    );
}