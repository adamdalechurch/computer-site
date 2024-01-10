import React from 'react';
import ReactDOM from 'react-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  greyBox1: {
    background: theme.palette.grey[100],
    padding: 30,
    marginTop: 10,
    marginBottom: 15,
    width: "100%",
    display: "block",
  },
  greyBox2: {
    background: theme.palette.grey[200],
    padding: 30,
    marginTop: 10,
    marginBottom: 15,
    width: "100%",
    display: "block",
  },
  pageHeader: {
    textAlign: "center",
    color: theme.palette.black.main,
    marginTop: 10,
    marginBottom: 15,
    width: "100%",
    display: "block",
  },
  seperator: {
    height: theme.spacing(1) / 2,
    background: theme.palette.black.main,
    opacity: 0.5,
    width: theme.spacing(8),
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
  para: {
    letterSpacing: 2,
    color: theme.palette.black.main,
    marginTop: 10,
    marginBottom: 15,
    width: "100%",
    display: "block",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
  <Container>
    <div className={classes.greyBox1}>
      <Typography variant="h4" className={classes.pageHeader}>
        About Veteran Computer Solutions
      </Typography>
      <div className={classes.seperator}></div>
      <Typography variant="body2" component="p" className={classes.para}>
        At Veteran Computer Solutions, we believe that 
        technology should enhance your life, not be frustrating. 
        Our team of experienced IT professionals is 
        dedicated to helping you get the most from your 
        technology. We are committed to providing quality IT support to all businesses, especially small and medium-sized enterprises
        that often face unique challenges. Our mission is to make your company stand out by leveraging the power of
        technology to help you achieve your business goals.
      </Typography>
    </div>
  <div className={classes.greyBox2}>
    <Typography variant="h4" className={classes.pageHeader}>
      Our Vision
    </Typography>
    <div className={classes.seperator}></div>
    <Typography variant="body2" component="p" className={classes.para}>
      Our vision is to be the leading provider of Information Technology solutions and support services for 
      small and medium-sized businesses in the United States. We want to help you stay ahead of the curve by providing you with the 
      latest technology and best practices that can help you achieve your business goals. Our team of dedicated IT professionals 
      is committed to providing you with the best possible service and helping you get the most from your technology investments. 
      Let us help you take your business to the next level.
    </Typography>
  </div>
</Container>
);
}