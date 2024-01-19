import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Container, useTheme } from "@material-ui/core";
import { InfoBox } from '../components/infobox';
import femaleUsingLaptop from '../img/female_using_laptop.webp';
import techPeopleWorking from '../img/tech_people_working.webp';
import { InfoCard } from '../components/infocard';
import ParallaxBackground from '../components/parallax';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 150,
    margin: 20,
    display: "inline-block",
    background: 'transparent',
    color: "white",
    [theme.breakpoints.down('xs')]: {
      maxWidth: "100%",
      marginLeft: 30,
      marginRight: 30
    }
  },
  media: {
    height: 375,
    filter: "brightness(0.7)"
  },
  para: {
    letterSpacing: 2,
    color: theme.palette.black.main,
    marginTop: 10,
    marginBottom: 15,
    textAlign: "left",
    fontSize: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(1.75),
    },
  },
  scheduleButton: {
    margin: "auto",
    display: "block",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20
  },

  mainContent: {
    marginTop: 0,
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
    }
  },
  infoBoxContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch', // Ensures that children stretch to fill the container
    flexWrap: 'wrap', // Allows wrapping for smaller screens
    background: 'transparent',
  },
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <ParallaxBackground>
      <Grid container spacing={3}>
        {/* Featured card 1 */}
          <InfoCard cols={6} title="Home Computer Solutions" image={femaleUsingLaptop}>
            <Typography variant="body2" component="p" className={classes.para}>
              We specialize in providing reliable, cost-effective computer repair services. We understand the importance of having reliable, efficient technology, and believe that technology should enhance your life and not be a source of frustration. Our experienced technicians are dedicated to helping you get the most from your technology.
            </Typography>
          </InfoCard>

        {/* Featured card 2 */}
          <InfoCard cols={6} title="Business IT Support" image={techPeopleWorking}>
            <Typography variant="body2" component="p" className={classes.para}>
              We provide comprehensive Business IT Support services to help companies of all sizes stay ahead in today's digital landscape. Our team of experienced IT professionals are available to ensure your systems are always up and running, and can provide tailored solutions to meet your specific business needs. We believe that all businesses should have access to quality IT Support, and we are here to help you succeed.
            </Typography>
          </InfoCard>

        <Grid item xs={12} md={12} style={{background:"transparent"}}>
          <Button variant="contained" color="secondary" className={classes.scheduleButton} onClick={() => {window.location.href = "/contact"}}>
            Schedule an Appointment
          </Button>
        </Grid>
        <div className={classes.infoBoxContainer}>
        {/* Info Boxes */}
        <InfoBox isSecondary={true} title="About Us">
          <Typography variant="body2" component="p" className={classes.para}>
            At Veteran Computer Solutions, we are passionate 
            about providing quality IT support for all. Our team 
            has extensive experience in IT management we work closely
            with our clients to understand their unique challenges and provide customized solutions to meet their needs no matter how small or large. 
          </Typography>
        </InfoBox>

        <InfoBox title="Our Vision">
          <Typography variant="body2" component="p" className={classes.para}>
            At Veteran Computer Solutions, our vision is two-fold. To provide cost-effective computer solutions for home users and to empower businesses with the tools they need to succeed in an increasingly digital world. We believe that technology should enhance your life and all businesses should have access to quality IT support. We are committed to providing the right solutions no matter the size of the problem.
          </Typography>
        </InfoBox>

        <InfoBox isSecondary={true} title="Services">
          <Typography variant="body2" component="p" className={classes.para}>
            We specialize in providing reliable, cost-effective computer repair services.
            We understand the importance of having reliable, 
            efficient technology, and believe that technology should enhance your
            life and not be a source of frustration. 
            Our experienced technicians are dedicated to helping you get 
            the most from your technology.
          </Typography>
        </InfoBox>
        </div>
       </Grid>
    </ParallaxBackground>
    <div style={{height: 100}}>
    </div>
  </div>
  );
}
