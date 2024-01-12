import React from 'react';
import ReactDOM from 'react-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ContactForm from '../components/contactForm';

const useStyles = makeStyles((theme) => ({
  contact: {  
    marginTop: 20,
    marginBottom: 20,
    background: theme.palette.white.main,
    color: theme.palette.black.main,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 30,
      marginRight: 30
    }
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <Container>  
      <Card className={classes.contact}>
        <CardContent>
          <ContactForm/>
        </CardContent>
      </Card>
    </Container>
  );
}