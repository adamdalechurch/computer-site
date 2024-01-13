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
    borderRadius: 5,
});

const useStyles = makeStyles((theme) => ({
    infoBox: {
        ...makeInfoBoxStyle(theme),
        background: theme.palette.grey.main
    },
    infoBoxAlt: {
        ...makeInfoBoxStyle(theme),
        background: theme.palette.grey.secondary
    },
    title:{
        color: theme.palette.black.main,
        fontWeight: '550',
        fontSize: theme.spacing(4),

        [theme.breakpoints.down('sm')]: {
            fontSize: theme.spacing(3),
            textAlign: 'center',
        },
    }
}));

export const InfoBox = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={4}>
        <div className={(props.isSecondary ? classes.infoBoxAlt : classes.infoBox )}>
        <Typography gutterBottom variant="h3" component="h2" className={classes.title}>
            {props.title}
        </Typography>
        <Typography variant="body2" component="p" className={classes.para}>
            {props.children}
        </Typography>
        </div>
    </Grid>
  );
}