import React, { useState } from 'react';
import { TextField, Button, Snackbar, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '800px',
    margin: 'auto',
    marginTop: theme.spacing(2),
  },
  input: {
    margin: theme.spacing(1, 0),
  },
  pageHeader: {
    marginTop: 20,
    marginBottom: 20,
    color: theme.palette.black.main[900],
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: 30
    }
  },
  para: {
    color: theme.palette.black.main,
    marginTop: 10,
    marginBottom: 15,
    fontSize: 20,
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // For example, you can send the form data to a server or trigger an action
    // Reset the form data after submission
    setFormData({ name: '', email: '', message: '' });
    // Show a snackbar to indicate successful submission
    setSnackbarOpen(true);
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
        At Veteran Computer Solutions our first priority 
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
      <Button type="submit" variant="contained" color="secondary">
        Submit
      </Button>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Form submitted successfully!"
      />
    </form>
  );
};

export default ContactForm;
