import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Container, useTheme } from "@material-ui/core";
import { InfoCard } from '../components/infocard';
import itAssessments from '../img/it_assessments.webp';
import cyberSecurity from '../img/cyber_security.webp';
import backupSolutions from '../img/backup_solutions.webp';
import networking from '../img/networking.webp';
import preventativeMaintenance from '../img/preventative_maintenance.webp';
import training from '../img/training.webp';


const useStyles = makeStyles((theme) => ({

  pageHeader: {
    textAlign: "center",
    color: theme.palette.black.main,
    marginTop: 10,
    marginBottom: 15,
    width: "100%",
    display: "block",
  },

  para: {
    letterSpacing: 2,
    color: theme.palette.black.main,
    marginTop: 10,
    marginBottom: 15,
    width: "100%",
    display: "block",
    textAlign: "left",

  },
}));

export default function HomeSolutions() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div align="center">
      <Container>
        <Typography variant="h2" className={classes.pageHeader}>
          PICKUP - REMOTE - IN-HOME SERVICE AVAILABLE
        </Typography>
        <Typography variant="body1" className={classes.para}>
          {process.env.REACT_APP_SITE_NAME} offers a comprehensive range of computer
          repair services to help you get your home technology back up and running. 
          From Virus Removal and Data Recovery to Hardware and Software Installation and Upgrade.
          Our computer repair service provides fast, reliable assistance with a 
          variety of hardware and software issues. We have the tools and know-how to diagnose any
          problem and provide the best solutions reliably and quickly. No matter the size of 
          the job, we’re here to make sure your home technology is working for you.
        </Typography> 
        <Grid container spacing={3} justify="center" alignItems="center" alignContent="center">
          <InfoCard
            title="Repairs and Upgrades"
            image={itAssessments}
          >
            Laptop and Computer repairs only based on what is
            most cost effective based on your needs.
          </InfoCard>
          <InfoCard
            title="Virus - Malware - Security"
            image={cyberSecurity}
          > 
            Viruses, Malware and Security should be your top 
            priority to protecting your technology and personal data.
          </InfoCard>
          <InfoCard
            title="Data Backup & Recovery"
            image={backupSolutions}
          >
            Protect your important files and precious memories 
            with constant backups safely and securely.
          </InfoCard>
          <InfoCard
            title="Home Networking"
            image={networking}
          >
            Connect your personal technology while preventing 
            others from accessing your devices.
          </InfoCard>
          <InfoCard
            title="Preventative Maintenance"
            image={preventativeMaintenance}
          >
            Your tech needs preventative maintenance just like 
            your vehicle  which extends the life of your technology and helps prevent loss of information.
          </InfoCard>
          <InfoCard
            title="Training"
            image={training}
          >
            Technology is meant to enhance your life and training 
            allows you to use technology to its fullest extent.
          </InfoCard>
        </Grid>  
    </Container>
  </div>
  );
}
