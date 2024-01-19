import React from 'react';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import ParallaxBackground from '../components/parallax';

const useStyles = makeStyles((theme) => ({
  pageHeader: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    fontSize: theme.spacing(3),
    fontWeight: '550',

  },
  seperator: {
    height: theme.spacing(8),
    background: 'transparent'
  },
  para: {
    fontSize: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    fontSize: theme.spacing(2),
  },
}));

const TermsOfService = () => {
  const classes = useStyles();

  return (
    <ParallaxBackground>
      <Typography variant="h2" className={classes.pageHeader}>
        Terms of Service of {process.env.REACT_APP_SITE_NAME}
      </Typography>

      <Typography variant="body1" className={classes.para}>
        Welcome to {process.env.REACT_APP_SITE_NAME}! These Terms of Service govern your use of the {process.env.REACT_APP_SITE_URL} website and the services provided (the "Service").
      </Typography>

      <Typography variant="body1" className={classes.para}>
        By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
      </Typography>

      <Typography variant="h2" className={classes.pageHeader}>
        1. Your Use of the Service
      </Typography>

      <Typography variant="body1" className={classes.para}>
        You must provide accurate and complete information when using the Service. You are responsible for maintaining the confidentiality of your account and password.
      </Typography>

      <Typography variant="h2" className={classes.pageHeader}>
        2. Privacy Policy
      </Typography>

      <Typography variant="body1" className={classes.para}>
        Your use of the Service is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and disclose information.
      </Typography>

      {/* Continue with additional sections based on your specific terms and conditions */}
      
      <Typography variant="h2" className={classes.pageHeader}>
        3. Changes to the Terms of Service
      </Typography>

      <Typography variant="body1" className={classes.para}>
        We may update our Terms of Service from time to time. It is your responsibility to review these Terms periodically for changes. Your continued use of the Service following the posting of changes constitutes acceptance of those changes.
      </Typography>

      <Typography variant="h2" className={classes.pageHeader}>
        4. Contact Us
      </Typography>

      <Typography variant="body1" className={classes.para}>
        If you have any questions or suggestions about our Terms of Service, do not hesitate to contact us.
      </Typography>

      <div className={classes.seperator}></div>
    </ParallaxBackground>
  );
};

export default TermsOfService;
