import React from 'react';
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ContactForm from '../components/contactForm';
import ParallaxBackground from '../components/parallax';

const useStyles = makeStyles((theme) => ({
  contact: {  
    marginBottom: theme.spacing(8),
    background: 'transparent',
    color: theme.palette.black.main,
    height:'100%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0
    }
  },
  main: {
    height: "100vh",
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <ParallaxBackground className={classes.main}>'
      <div className={classes.contact}>
        <ContactForm/>
      </div>
    </ParallaxBackground>
  );
}