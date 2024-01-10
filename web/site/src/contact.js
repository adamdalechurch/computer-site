import React from 'react';
import ReactDOM from 'react-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  pageHeader: {
    marginTop: 20,
    marginBottom: 20,
    color: theme.palette.black.main,
    [theme.breakpoints.down('xs')]: {
      fontSize: 30
    }
  },
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
  para: {
    letterSpacing: 2,
    color: theme.palette.black.main,
    marginTop: 10,
    marginBottom: 15
  },
}));

export default function Contact() {
  return (
    <Container>
      <Typography variant="h2" className={classes.pageHeader}>
        Contact

      </Typography>
      <Card className={classes.about}>
        <CardContent>
          <Typography variant="body2" component="p" className={classes.para}>
            Veteran Computer Solutions is a Veteran owned and operated business. 
            We are dedicated to providing reliable, cost-effective IT solutions for your home or business.
            We understand the importance of having reliable, efficient technology, and believe that technology should enhance your life and not be a source of frustration. 
            Our experienced technicians are dedicated to helping you get the most from your technology.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}