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
import { InfoBox } from '../components/infobox';
import { InfoCard } from '../components/infocard';
import onSignTechSupport from '../img/on_site_tech_support.webp';
import networking from '../img/networking.webp';
import backupSolutions from '../img/backup_solutions.webp';
import cyberSecurity from '../img/cyber_security.webp';
import training from '../img/training.webp';
import remoteSupport from '../img/remote_support.webp';

const useStyles = makeStyles((theme) => ({

  pageHeader: {
    textAlign: "center",
    color: theme.palette.black.main,
    marginTop: 10,
    marginBottom: 15,
    width: "100%",
    display: "block",
    fontWeight: '550',
    fontSize: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(3),
    },
  },

  para: {
    letterSpacing: 2,
    color: theme.palette.black.main,
    marginTop: 10,
    marginBottom: 15,
    width: "100%",
    display: "block",
    textAlign: "left",
    fontSize: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(2),
    },
  },
}));

export default function BusinessSupport() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div align="center">
      <Container>
        <Typography variant="h2" className={classes.pageHeader}>
          Business IT Support
        </Typography>
        {/* the paragraph */}
        <Typography variant="body1" className={classes.para}>
          {process.env.REACT_APP_SITE_NAME} offers IT Solutions for businesses and organizations of all sizes. 
          Our experienced professionals have the knowledge to diagnose and resolve your IT issues efficiently and effectively,
          so you can get back to focusing on your business goals. With us, you can be sure your technology is working for you and
          will recognize opportunities to not only keep your business running efficiently, but also help take your organization to the next level.      
        </Typography> 
      <Grid container spacing={3} justify="center" alignItems="center" alignContent="center">
        <InfoCard
          title="On-Site Tech Support"
          image={onSignTechSupport}
        >
          We are here to get your technology functioning quickly again. 
          Our team provides services tailored to your business’s unique needs.
        </InfoCard>
        <InfoCard
          title="Networking"
          image={networking}
        >
          New network installs, upgrades or preventative maintenance, 
          your network is the backbone to your business connectivity.
        </InfoCard>
        <InfoCard
          title="Backup Solutions & Recovery"
          image={backupSolutions}
        >
          Protect your data from accidental loss or technology crashes.  
          Loss data and downtime cost lost time and revenue.
        </InfoCard>
        <InfoCard
          title="Cyber Security"
          image={cyberSecurity}
        >
          Viruses, Malware and Security should be your top priority 
          to protecting your technology and business data.
        </InfoCard> 
        <InfoCard
          title="Training"
          image={training}
        >
          Customized training that ensures that your staff are 
          utilizing technology that benefits your company to its fullest.
        </InfoCard>
        <InfoCard
          title="Remote Support"
          image={remoteSupport}
        >
          Need immediate support?  We can remote in securely to your
          system to resolve issues.
        </InfoCard>
      </Grid>
    </Container>
  </div>
  );
}
