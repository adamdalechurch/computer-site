import React from 'react';
import ReactDOM from 'react-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

export default function TermsOfService() {
  return (
    <Container>
      <Typography variant="h2" className={classes.pageHeader}>
        Privacy Policy
      </Typography>
      <Card className={classes.about}>
        <CardContent>
          <Typography variant="body2" component="p" className={classes.para}>
            {process.env.REACT_APP_SITE_NAME} is a Veteran owned and operated business. 
            We are dedicated to providing reliable, cost-effective IT solutions for your home or business.
            We understand the importance of having reliable, efficient technology, and believe that technology should enhance your life and not be a source of frustration. 
            Our experienced technicians are dedicated to helping you get the most from your technology.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}