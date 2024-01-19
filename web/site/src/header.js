import React, { useState, useEffect } from 'react';
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
import Box from '@material-ui/core/Box';
import { Button } from "@material-ui/core";
import {NavLink, useLocation} from "react-router-dom";
import {Routes} from './routes';
import Socials from "./components/socials";
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
  seperator: {
    height: theme.spacing(4),
    background: 'transparent',
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing(1),
    }
  },
  header: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontWeight: "bolder",
    marginTop: theme.spacing(2),
    color: theme.palette.black.main,
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      fontSize: theme.spacing(3.5),
      textAlign: "center",
    },
  },
  brandContainer: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    },
  },
  logoContainer: {
    width: '8%',
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: theme.spacing(2),
    },
  },
  titleContainer: {
    width: '85%',
    height: 'auto',
    marginLeft: theme.spacing(2),
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
      display: 'none'
    },
  },
  titleContainerMobile: {
    width: '100%',
    height: 'auto',
    display: 'none',
    marginTop: theme.spacing(3.5),
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
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
    width: '100%',
    height: "auto",
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(20),
      height: theme.spacing(20),
      margin: "auto",
    },
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing(32),
      padding: theme.spacing(1),
      marginBottom: 0
    }
  },
 subheaderContainer: {
    margin: '64px 0',
  },
 subheaderContainerHome: {
    marginTop: `calc(30vh - 64px)`, // Adjust '64px' to your header's height
    marginBottom: `calc(40vh - 64px)`,
    transition: 'margin-top 0.9s', // Smooth transition for the subheader
    // for non mobile, don't do any of this:
    [theme.breakpoints.up('md')]: {
      marginTop: `64px`, // Adjust '64px' to your header's height
      marginBottom: 0,
    }
  },
  subheaderScrolledHome: {
    transition: 'margin-top 0.9s', // Smooth transition for the subheader=
    [theme.breakpoints.down('sm')]: {
      marginBottom: `50vh`,
    },
  },
  bar: {
    background: theme.palette.secondary.main,
  },
  subheaderBar: {
    background: 'transparent',
    boxShadow: 'none',
    border: 'none',
    color: 'black',
    alignItems: 'left',
    justifyContent: 'left',
    // [theme.breakpoints.down('sm')]: {
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // }
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
  menuContainer: {
    display: 'flex',
    width: '100%',
    maxWidth: '1280px',
    margin: 'auto',
    background: theme.palette.secondary.main,
    // [theme.breakpoints.down('sm')]: {
    //   display: 'block'

    // },
  },
  drawerLink: {
    color: theme.palette.black.main,
    textDecoration: "none",
    fontSize: theme.spacing(3),
    margin: theme.spacing(3),
    display: 'block',
    color: 'black',
    width: '100%',
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const current_page = location.pathname.split("/")[1]; 

  const handleScroll = () => {
    const offset = window.pageYOffset;
    console.log(offset);
    setIsScrolled(offset > 1); // Adjust scroll offset as needed
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={classes.header}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar className={classes.menuContainer}>
          <Box sx={{ flexGrow: 1 }}>
            {Routes.filter(route => route.showOnMenu).map((route, index) => (
              <NavLink exact to={route.path} className={classes.link} activeClassName={classes.activeLink}> {route.title} </NavLink>
            ))}
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <div className={classes.callContainer}>
              <Button className={classes.phone} href={"tel:"+process.env.REACT_APP_SITE_PHONE}>
              <PhoneIcon className={classes.phoneIcon} />
                {process.env.REACT_APP_SITE_PHONE}
              </Button>
            </div>
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
        <div className={(
          current_page === "" ? 
            isScrolled ? classes.subheaderScrolledHome : classes.subheaderContainerHome
          : classes.subheaderContainer
        )}>
        <div className={classes.subheader}>
          <Box sx={{ flexGrow: 1, display:  'flex' }}>
            <AppBar position="static" className={classes.subheaderBar}>
              <Toolbar>
              <Container>
                <div className={classes.brandContainer}>
                  <div className={classes.titleContainerMobile}>
                    <Typography className={classes.title} variant="h6" noWrap>
                      {process.env.REACT_APP_SITE_NAME}
                    </Typography>
                  </div>
                  <div className={classes.logoContainer}>
                    <Link href="/">
                      <Avatar alt={process.env.REACT_APP_SITE_NAME} src="/logo.svg" className={classes.avatar} />
                    </Link>
                  </div>
                  <div className={classes.titleContainer}>
                    <Typography className={classes.title} variant="h6" noWrap>
                      {process.env.REACT_APP_SITE_NAME}
                    </Typography>
                  </div>
                </div>
</Container>
              </Toolbar>
            </AppBar>
          </Box>
          <Box>
            {/* <div className={classes.topSocials}>
              <Socials />
            </div> */}
          </Box>
        </div></div>
        {/* <div className={classes.topSocialsMobile}>
          <Socials />
        </div> */}
      <div className={classes.seperator}>
      </div> 
  </div>
  );
}
