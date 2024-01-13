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
import {NavLink} from "react-router-dom";
import {Routes} from './routes';
import Socials from "./components/socials";

const useStyles = makeStyles((theme) => ({
  seperator: {
    height: theme.spacing(8),
    background: theme.palette.white.main,
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing(1),
    }
  },
  mainLogoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainLogo: {
    width: theme.spacing(50),
    height: theme.spacing(50),
    background: 'transparent',
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      width: 1900,
    }
  },
  header: {
    flexGrow: 1,
  },
  bar: {
    background: theme.palette.base.main,
  },
  title: {
    flexGrow: 1,
    fontSize: theme.spacing(4),
    fontWeight: "bolder",
    color: theme.palette.black.main,
  },
  login: {
    margin: 20,
    fontWeight: "bolder",
    [theme.breakpoints.down('sm')]: {
      padding: 5,
    },
  },
  search: {
    position: 'relative',
    borderRadius: 20,
    backgroundColor: fade(theme.palette.primary.main, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  avatar: {
    marginRight: 10,
    border: "2px solid white",
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  user: {
    margin: 25
  },
  gh: {
    color: "white",
    margin: 15,
    [theme.breakpoints.down('sm')]: {
      display: "none"
    }
  },
  link: {
    color: "white",
    margin: 15,
    textDecoration: "none",
    fontWeight: "bold",
    [theme.breakpoints.down('md')]: {
      display: "none"
    }
  },
  activeLink: {
    textDecoration: "underline",
    fontWeight: "bolder",
    },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  topSocials: {
    display: 'flex',
    alignItems: 'bottom',
    justifyContent: 'bottom',
    fontSize:theme.spacing(1),
    // move to the left slightly:
    marginRight: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  topSocialsMobile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    fontSize:theme.spacing(2),
    // move to the left slightly:
    marginRight: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  callContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    color: theme.palette.white.main,
    background: theme.palette.primary.main,
    margin: theme.spacing(2),
    fontSize: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      display: "none"
    }
  },
  phoneIcon: {
    marginBottom: '2px', // adjust this value as needed
  },
  appBarItems: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  },
  subheader: {
    color: theme.palette.black.main,
    height: theme.spacing(12),
    maxWidth: '1280px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(10),
      padding: theme.spacing(1),
      marginBottom: 0
    }
  },
  subheaderBar: {
    background: 'transparent',
    boxShadow: 'none',
    border: 'none',
    color: 'black',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },

  drawerLink: {
    color: theme.palette.black.main,
    textDecoration: "none",
    fontSize: theme.spacing(4),
    margin: theme.spacing(4),
    display: 'block',
    color: 'black',
    width: '100%',
  },
}));

export default function Header( { config } ) {
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
            {Routes.filter(route => route.showOnMenu).map((route, index) => (
              <NavLink exact to={route.path} className={classes.link} activeClassName={classes.activeLink}> {route.title} </NavLink>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <div className={classes.callContainer}>
              <Button className={classes.phone} href={"tel:"+process.env.REACT_APP_SITE_PHONE}>
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
            {Routes.filter(route => route.showOnMenu).map((route, index) => (
                <NavLink exact to={route.path} className={classes.drawerLink}
                 activeClassName={classes.activeLink}> {route.title} </NavLink>
            ))} 
          </List>  
        </div>
        </Drawer>
        <div className={classes.subheader}>
          <Box sx={{ flexGrow: 1, display:  'flex' }}>
            <AppBar position="static" className={classes.subheaderBar}>
              <Toolbar>
              <Link href="/">
                <Avatar alt={process.env.REACT_APP_SITE_NAME} src="/logo.svg" className={classes.avatar} />
                </Link>
                <Typography className={classes.title} variant="h6" noWrap>
                  {process.env.REACT_APP_SITE_NAME}
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>

          <Box>
            <div className={classes.topSocials}>
              <Socials />
            </div>
          </Box>
        </div>
        <div className={classes.topSocialsMobile}>
          <Socials />
        </div>
      <div className={classes.seperator}>
      </div> 
  </div>
  );
}
