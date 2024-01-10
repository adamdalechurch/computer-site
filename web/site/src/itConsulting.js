import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Container, useTheme } from "@material-ui/core";
import { InfoCard } from './components/infocard';
import itAssessments from './img/it_assessments.webp';
import irProjectManagement from './img/it_project_management.webp';
import itStrategyAndPlanning from './img/it_strategy_and_planning.webp';
import backupSolutions from './img/backup_solutions.webp';
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
  },
}));

export default function ITConsulting() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div align="center">
      <Container>
        <Typography variant="h2" className={classes.pageHeader}>
          IT Consulting
        </Typography>
        {/* the paragraph */}
        <Typography variant="body1" className={classes.para}>
          Veteran Computer Solutions is here to help take the guesswork 
          out of your tech challenges. With years of experience in a wide range 
          of technical domains, our team of experts are ready to offer you the 
          highest quality IT consulting services. From IT strategy and planning 
          to IT project management, assessments, budgeting and auditing, we’ve got you covered! 
          Let us help simplify your IT needs and solve your technical challenges today.
        </Typography> 
      <Grid container spacing={3} justify="center" alignItems="center" alignContent="center">
        <InfoCard
          title="IT Assessments"
          image={itAssessments}
        >
          We will assess your entire IT system including staff to 
          determine any area of deficiencies and ensuring everything is
          up to date and running efficiently while maximizing your bottom line.
        </InfoCard>
        <InfoCard
          title="IT Project Management"
          image={irProjectManagement}
        >
          We have many years of experience managing IT projects
          from start to finish and ensuring each project meets scope, 
          time, and budget while ensuring all stakeholders are happy. 
        </InfoCard>
        <InfoCard
          title="IT Strategy & Planning"
          image={itStrategyAndPlanning}
        >
          With years of experience we will ensure you 
          get what your company needs with an eye on future growth.
          We excel in making sure you don't pay for more than you need.
        </InfoCard>
        <InfoCard
          title="Business Continuity & Disaster Recovery"
          image={backupSolutions}
        >
          Everything works great until it doesn't. We specialize in ensuring your systems
          are available when you need them while limiting business downtime.
        </InfoCard>
      </Grid>
    </Container>
  </div>
  );
}
