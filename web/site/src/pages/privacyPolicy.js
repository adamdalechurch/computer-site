import React from 'react';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  pageHeader: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    fontSize: theme.spacing(4),
    fontWeight: '550',

    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(3),
    },
  },
  seperator: {
    height: theme.spacing(8),
    background: 'transparent'
  },
  para: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    fontSize: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(1.5),
    },
  },
}));

const PrivacyPolicy = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h2" className={classes.pageHeader}>
        Privacy Policy of {process.env.REACT_APP_SITE_NAME}
      </Typography>

      <Typography variant="body1" className={classes.para}>
        {process.env.REACT_APP_SITE_NAME} operates the {process.env.REACT_APP_SITE_URL} website, which provides the SERVICE.
      </Typography>

      <Typography variant="body1" className={classes.para}>
        This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the {process.env.REACT_APP_SITE_NAME} website.
      </Typography>

      <Typography variant="body1" className={classes.para}>
        If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
      </Typography>

      <Typography variant="body1" className={classes.para}>
        The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at {process.env.REACT_APP_SITE_URL}, unless otherwise defined in this Privacy Policy.
      </Typography>

      <Typography variant="h2" className={classes.pageHeader}>
        Information Collection and Use
      </Typography>

      <Typography variant="body1" className={classes.para}>
        For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.
      </Typography>

      <Typography variant="h2" className={classes.pageHeader}>
        Log Data
      </Typography>

      <Typography variant="body1" className={classes.para}>
        We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
      </Typography>

      {/* Continue with the rest of the sections */}
      
      <Typography variant="h2" className={classes.pageHeader}>
        Changes to This Privacy Policy
      </Typography>

      <Typography variant="body1" className={classes.para}>
        We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.
      </Typography>

      <Typography variant="body1" className={classes.para}>
        Our Privacy Policy was created with the help of the Privacy Policy Template.
      </Typography>

      <Typography variant="h4" className={classes.pageHeader}>
        Contact Us
      </Typography>

      <Typography variant="body1" className={classes.para}>
        If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
      </Typography>
      <div className={classes.seperator}></div>
    </Container>
  );
};

export default PrivacyPolicy;
