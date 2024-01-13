import React, { useEffect, useState, useScrollTrigger } from "react";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {fade, makeStyles, useTheme} from '@material-ui/core/styles';
import {Container} from "@material-ui/core";
import PhoneIcon from '@material-ui/icons/Phone';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import {Button} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/LinkedIn';
import {FooterColumn} from "./components/footerColumn";
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import {NavLink} from "react-router-dom";

import {Routes} from './routes';
import Socials from "./components/socials";

const useStyles = makeStyles((theme) => ({
  seperator: {
    height: theme.spacing(8),
    background: theme.palette.white.main,
  },
  mainLogo: {
    width: theme.spacing(0),
    height: theme.spacing(50),
    background: 'transparent',
    marginTop: theme.spacing(2),
  },
  footer: {
    flexGrow: 1,
    background: theme.palette.base.main,
    color: theme.palette.white.main,
    minHeight: "auto",
    // on xs, double the height
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing(75),
    } 
  },
  bar: {
    background: theme.palette.base.main,
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
  copyright:{
    display: 'block',
  },


  avatar: {
    border: "2px solid white",
    width: theme.spacing(16),
    height: "auto",
    margin: "auto",
  },
  bottomMenu: {
    width: "100%", 
    textAlign: "left",
    // center on mobile:
    [theme.breakpoints.down('sm')]: {
      textAlign: "center",
    }
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
}));

export default function Footer( { config } ) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.footer}>
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
        {/* Bottom Socials */}
        <div className={classes.bottomSocials}>
          <Socials />
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
    <Typography variant="body2" color="inherit" align="center" className={classes.copyright}>
      © 2020 {process.env.REACT_APP_SITE_NAME}
    </Typography>
  </div>
  );
}
