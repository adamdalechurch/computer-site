import React, { useEffect, useState, useScrollTrigger } from "react";
import Typography from '@material-ui/core/Typography';
import {fade, makeStyles, useTheme} from '@material-ui/core/styles';
import {Container} from "@material-ui/core";
import Link from '@material-ui/core/Link';
import {FooterColumn} from "./components/footerColumn";
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import {NavLink} from "react-router-dom";

import {Routes} from './routes';
import Socials from "./components/socials";
import ParallaxBackground from "./components/parallax";

const current_year = new Date().getFullYear();

const useStyles = makeStyles((theme) => ({
  mainLogo: {
    width: theme.spacing(0),
    background: 'transparent',
    marginTop: theme.spacing(2),
  },
  link: {
    color: "white",
    fontWeight: "normal",
    textDecoration: "none",
    margin: 15,
    display: 'block',
  },
  linkActive: {
    fontWeight: "bold",
    textDecoration: "underline",
  },
  bottomSocials: {
  // make this div float in the center:
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    fontSize:theme.spacing(1),
  },
  avatar: {
    border: "2px solid white",
    width: theme.spacing(16),
    height: "auto",
    margin: "auto",
  },
  policyLinks: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 15,
    width: "100%",
    display: "block",
  },
  whiteHyperlink: {
    color: "white",
    margin: 5,
    display: 'inline-block',
  },
  copyright:{
    position: "absolute",
    bottom: 0,
    width: "100%",
    textAlign: "center",

    marginTop: 20,
    marginBottom: 5,
    color: "white",
  },
  footer: {
    position: "relative",
    width: "100%",
    background: theme.palette.base.main,
  },
}));

export default function Footer() {
  const classes = useStyles();
  const theme = useTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className={classes.footer}>
      <ParallaxBackground bgImage="bg_seal_blue.png" vhHeight="40">
        <Container>
          <Grid container spacing={3}>
          <FooterColumn>
            {/*Bottom Menu */}
            <div className={classes.bottomMenu}>
              {Routes.filter(route => route.showOnMenu).map((route, index) => (
                <NavLink exact to={route.path} className={classes.link} 
                activeClassName={classes.linkActive}>
                  {route.title}
                </NavLink>
              ))}
            </div>
          </FooterColumn>
          <FooterColumn>
            <Avatar alt="Veteran Owned Business" src="/vob.webp" className={classes.avatar} />
            <div className={classes.policyLinks}>
            <Link href="/privacy-policy" class={classes.whiteHyperlink}>
              <Typography >
                Privacy Policy
              </Typography>
            </Link>
            /
            <Link href="/terms-of-service" class={classes.whiteHyperlink}>
              <Typography>
                Terms of Service
              </Typography>
            </Link> 
          </div>
          </FooterColumn>
          </Grid>
        </Container>
      <Typography variant="body2" color="white" align="center" className={classes.copyright}>
        © {current_year} {process.env.REACT_APP_SITE_NAME} 
      <Socials />
      </Typography>
      </ParallaxBackground>

    </div>
  );
}
