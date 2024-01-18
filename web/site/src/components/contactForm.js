import React, { useState } from 'react';
import { TextField, Button, Snackbar, makeStyles , Typography, CircularProgress} from '@material-ui/core';
import Alert from '@mui/material/Alert';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '800px',
    margin: 'auto',
    fontWeight: '550',
    marginTop: theme.spacing(2),
  },
  input: {
    margin: theme.spacing(1, 0),
  },
  pageHeader: {
    marginBottom: 20,
    color: theme.palette.black.main[900],
    textAlign: 'center',
    fontSize: theme.spacing(4),
    fontWeight: '550',
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(3),
    }
  },
  para: {
    color: theme.palette.black.main,
    marginTop: 10,
    marginBottom: 15,
    fontSize: theme.spacing(2.5),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(2),
    },
  },
  alert: {
    fontSize: theme.spacing(4),
    fontWeight: 'bold',
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formLoading, setFormLoading] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('success');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormLoading(true);
    setAlertSeverity('success');
    setSnackbarOpen(true);
    setFormLoading(false);

    // submit form to formsubmit.co
    fetch(process.env.REACT_APP_FORMSUBMIT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    .then(response => {
      setFormData({ name: '', email: '', message: '' });
      if (response.ok) {
        setAlertSeverity('success');
        setSnackbarOpen(true);
      }
    })
    .catch((error) => {
      setAlertSeverity('error');
    })
    .finally(() => {
      setFormLoading(false);
    }); 
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Typography variant="h2" className={classes.pageHeader}>
        Contact Us
      </Typography>    
      <Typography variant="body1" className={classes.para}>
        At {process.env.REACT_APP_SITE_NAME} our first priority 
        is ensuring your technology works for you
        and that we offer the best support possible.
      </Typography>
      <Typography variant="body1" className={classes.para}>
        Fill out the form according to your 
        needs and we will answer your inquiry the same 
        business day.
      </Typography>
      <TextField
        className={classes.input}
        label="Name"
        variant="outlined"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <TextField
        className={classes.input}
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        className={classes.input}
        label="Message"
        variant="outlined"
        multiline
        rows={4}
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <Button
        type="submit"
        variant="contained"
        color="secondary"
        disabled={formLoading}
      >
        {(formLoading ? 
          <span>
            <CircularProgress size={24} color="secondary" /> Loading... 
          </span> : 
          'Submit'
        )}
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Form submitted successfully!"
      >
        <Alert onClose={handleSnackbarClose} severity={alertSeverity} className={classes.alert}>
          {alertSeverity === 'success' ? 'Email submitted successfully!' : 'Error submitting form.'}
        </Alert>
      </Snackbar>
    </form>
  );
};

export default ContactForm;
