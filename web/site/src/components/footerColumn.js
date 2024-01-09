import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    footerColumn: {
        padding: theme.spacing(1),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
}));

export const FooterColumn = (props) => {
  const classes = useStyles();
  return (
    <Grid item md={4}>
        <div className={classes.footerColumn}>
            {props.children}
        </div>
    </Grid>
  );
}