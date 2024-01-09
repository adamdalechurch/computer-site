import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Container, useTheme } from "@material-ui/core";
import femaleUsingLaptop from './female_using_laptop.webp';
import techPeopleWorking from './tech_people_working.webp';
import { InfoBox } from './components/infobox';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 150,
    margin: 20,
    display: "inline-block",
    background: theme.palette.white.main,
    color: "white",
    [theme.breakpoints.down('xs')]: {
      maxWidth: "100%",
      marginLeft: 30,
      marginRight: 30
    }
  },
  container: {
    width: "90%",
    margin: "auto"
  },
  media: {
    height: 375,
    filter: "brightness(0.7)"
  },
  para: {
    letterSpacing: 2,
    color: theme.palette.black.main,
    marginTop: 10,
    marginBottom: 15
  },
  scheduleButton: {
    margin: "auto",
    display: "block",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20
  },
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [movies, setMovies] = useState(0);

  return (
    <div>
      <Container>
      <Card>
      <CardContent>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
          <CardMedia className={classes.media} image={ femaleUsingLaptop } />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Home Computer Solutions
              </Typography>
              <Typography variant="body2" component="p" className={classes.para}>
                We specialize in providing reliable, cost-effective computer repair services.
                We understand the importance of having reliable, 
                efficient technology, and believe that technology should enhance your
                life and not be a source of frustration. 
                Our experienced technicians are dedicated to helping you get 
                the most from your technology.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
          <CardMedia className={classes.media} image={ techPeopleWorking } />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Business IT Support
              </Typography>
              <Typography variant="body2" component="p" className={classes.para}>
                We specialize in providing reliable, cost-effective computer repair services.
                We understand the importance of having reliable, 
                efficient technology, and believe that technology should enhance your
                life and not be a source of frustration. 
                Our experienced technicians are dedicated to helping you get 
                the most from your technology.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={12} >
          <Button variant="contained" color="secondary" className={classes.scheduleButton}>
            Schedule an Appointment
          </Button>
        </Grid>
        <InfoBox 
          title="Computer Repair" 
          text="We specialize in providing relWe specialize in providing reliable, cost-effective computer repair seiable, cost-effective computer repair seWe specialize in providing reliable, cost-effective computer repair services." 
        />
        <InfoBox 
          title="Computer Repair" 
          text="We specialize in providing reliaWe specialize in providing reliable, cost-effective computer repair seble, cost-effective computer repair seWe specialize in providing reliable, cost-effective computer repair services." 
        />
        <InfoBox 
          title="Computer Repair" 
          text="We specialize in providing reliable, cost-effective computer repair seWe specialize in providing reliable, cost-effective computer repair seWe specialize in providing reliable, cost-effective computer repair services." 
        />
       </Grid>
      </CardContent>
     </Card>
    </Container>
  </div>
  );
}
