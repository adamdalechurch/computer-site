import React, { useEffect, useState } from "react";
import SearchAppBar from './header';
import Home from './pages/home';
import BusinessSupport from './pages/businessSupport';
import ITConsulting from './pages/itConsulting';
import HomeSolutions from './pages/homeSolutions';
import About from './pages/about';
import Contact from './pages/contact';
import PrivacyPolicy from './pages/privacyPolicy';
import TermsOfService from './pages/termsOfService';
import Footer from './footer';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import ChevronUpIcon from '@material-ui/icons/ExpandLess';
import ParallaxBackground from './components/parallax';
import ReactGA from 'react-ga';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const mytheme = theme;

const useStyles = makeStyles(theme => ({
  notFound: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)"
  },
  scrollToTop: {
    position: "fixed",
    bottom: theme.spacing(4),
    right: theme.spacing(4),
    zIndex: 1000,
    cursor: "pointer",
    color: 'white',
    background: '#014494',
    padding: theme.spacing(1),
    borderRadius: "50%",
    border: "1px solid white",
    "&:hover": {
      background: 'white',
      color: '#014494'
    }
  },
  main: {
    position: "absolute",
    top: 0,
    minHeight: "100vh",
    width: "100%",
  },
}));

export default function App() {
const classes = useStyles();

const [showScroll, setShowScroll] = useState(false)

const checkScrollTop = () => {
  if (!showScroll && window.pageYOffset > 400){
    setShowScroll(true)
  } else if (showScroll && window.pageYOffset <= 400){
    setShowScroll(false)
  }
} 

const scrollToTop = () =>{
  window.scrollTo({top: 0, behavior: 'smooth'});
}

useEffect(() => {
  window.addEventListener('scroll', checkScrollTop)
  return () => {
    window.removeEventListener('scroll', checkScrollTop)
  }
})

  return (
    <ThemeProvider theme={theme}>
      <ParallaxBackground bgImage={"bg_seal_white.png"} vhHeight={100}/>
    	<div class={classes.main}>
    	<Router>
    	<SearchAppBar />
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
            <Contact/>
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route path="/terms-of-service">
            <TermsOfService />
          </Route>
        </Switch>
        <Footer/>
    	</Router>
      {showScroll && 
        <div 
          onClick={scrollToTop} 
          className={classes.scrollToTop}>
          <ChevronUpIcon />
        </div>}
    </div>
      </ThemeProvider>
    );
}