import React from 'react';
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ContactForm from '../components/contactForm';

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
    height: "calc(100vh - " +theme.spacing(60)+"px)"
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <Container className={classes.main}>
      <div className={classes.contact}>
        <ContactForm/>
      </div>
    </Container>
  );
}