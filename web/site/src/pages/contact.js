import React from 'react';
import ReactDOM from 'react-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ContactForm from '../components/contactForm';

const useStyles = makeStyles((theme) => ({
  contact: {  
    marginBottom: theme.spacing(8),
    background: theme.palette.white.main,
    color: theme.palette.black.main,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0
    }
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.contact}>
        <ContactForm/>
      </div>
    </Container>
  );
}