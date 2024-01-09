import React, { useEffect, useState, useScrollTrigger } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import PhoneIcon from '@material-ui/icons/Phone';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import { Button } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  seperator: {
    height: theme.spacing(8),
    background: theme.palette.white.main,
  },
  mainLogo: {
    width: theme.spacing(50),
    height: theme.spacing(50),
    background: 'transparent',
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: 300,
    }
  },
  footer: {
    flexGrow: 1,
  },
  bar: {
    background: theme.palette.base.main,
  },
  link: {
    color: "white",
    margin: 15,
    [theme.breakpoints.down('md')]: {
      display: "none"
    }
  },
  bottomSocials: {
    display: 'flex',
    alignItems: 'bottom',
    justifyContent: 'bottom',
    fontSize:theme.spacing(1),
    // move to the left slightly:
    marginRight: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  facebook: {
    color: '#3b5998',
    width:30,
  },
  twitter: {
    color: '#00acee',
    width: 30, 
  },
  instagram: {
    color: '#e4405f',
    width:30, 
  }
}));

export default function SearchAppBar( { config } ) {
  const classes = useStyles();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  function search(e) {
    if (e.keyCode==13) window.location.href="/search/"+e.target.value
  }

  return (
    <div className={classes.header}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link href="/" className={classes.link}>HOME</Link>
            <Link href="/business-support" className={classes.link}>BUSINESS SUPPORT</Link>
            <Link href="/it-consulting" className={classes.link}>IT CONSULTING</Link>
            <Link href="/home-solutions" className={classes.link}>HOME SOLUTIONS</Link>
            <Link href="/about" className={classes.link}>ABOUT</Link>
            <Link href="/contact" className={classes.link}>CONTACT</Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <div className={classes.callContainer}>
              <Button className={classes.phone} href={"tel:"+config.phone}>
              <PhoneIcon className={classes.phoneIcon} />
                {config.phone}
              </Button>
            </div>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
          </Box>
        </Toolbar>       
      </AppBar>
      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
          <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {['Home', 'Search Movie'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
        <div className={classes.subheader}>
          {/* <AppBar position="static" className={classes.subheaderBar}>
            <Toolbar>
            <Link href="/">
          <Avatar alt="Computer Solutions" src="/logo.svg" className={classes.avatar} />
          </Link>
          <Typography className={classes.title} variant="h6" noWrap>
            Computer Solutions
          </Typography>
            </Toolbar>
          </AppBar> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <AppBar position="static" className={classes.subheaderBar}>
            <Toolbar>
            <Link href="/">
          <Avatar alt="Computer Site" src="/logo.svg" className={classes.avatar} />
          </Link>
          <Typography className={classes.title} variant="h6" noWrap>
            Computer Site
          </Typography>
            </Toolbar>
          </AppBar>
          </Box>

        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <div className={classes.topSocials}>
              <Link href="config.facebook" className={classes.facebook}><FacebookIcon /></Link>
              <Link href="config.twitter" className={classes.twitter}><TwitterIcon /></Link>
              <Link href="config.instagram" className={classes.instagram}><InstagramIcon /></Link>
            </div>
          </Box>
          </div>
          <div className={classes.seperator}>
            {/* <div className={classes.mainLogoContainer}>
                 <Avatar alt="Computer Solutions" src="/logo.svg" className={classes.mainLogo} />
            </div> */}
          </div> 
    </div>
  );
}
