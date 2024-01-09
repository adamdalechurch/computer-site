import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const makeInfoBoxStyle = (theme) => ({
    padding: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    border: '1px solid #ccc',
    borderRadius: 5,
    background: theme.palette.grey.secondary,
});

const useStyles = makeStyles((theme) => ({
    infoBox: {
        ...makeInfoBoxStyle(theme),
        background: theme.palette.grey.main,
    },
    infoBoxAlt: {
        ...makeInfoBoxStyle(theme),
        background: theme.palette.grey.secondary,
    }
}));

export const InfoBox = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={4}>
        <div className={classes.infoBox}>
        <Typography gutterBottom variant="h3" component="h2">
            {props.title}
        </Typography>
        <Typography variant="body2" component="p" className={classes.para}>
            {props.children}
        </Typography>
        </div>
    </Grid>
  );
}