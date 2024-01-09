import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const makeInfoBoxStyle = (theme) => ({
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
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

export const InfoBox = ({title, text, isAlt = false}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={4}>
        <div className={classes.infoBox}>
        <Typography gutterBottom variant="h5" component="h2">
            {title}
        </Typography>
        <Typography variant="body2" component="p" className={classes.para}>
            {text}
        </Typography>
        </div>
    </Grid>
  );
}