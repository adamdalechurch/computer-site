import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
    card: {
        margin: 20,
        background: theme.palette.white.main,
        color: "white",
        [theme.breakpoints.down('xs')]: {
            maxWidth: "100%",
            marginLeft: 0,
            marginRight: 0
        }
    },
    header: {
        letterSpacing: 2,
        color: theme.palette.black.main,
        marginTop: 10,
        marginBottom: 15
    },
    media: {
        height: 205,
        filter: "brightness(0.7)"
    },
    para: {
        letterSpacing: 2,
        color: theme.palette.black.main,
        marginTop: 10,
        marginBottom: 15,
        padding: 0,
        // [theme.breakpoints.down('sm')]: {
        //     padding: theme.spacing(1),
        // },
    },
}));

export const InfoCard = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={props.cols || 4}>
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={props.image}
                title={props.title}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.header}>
                {props.title}
            </Typography>
            <Typography variant="body2" component="p" className={classes.para}>
                {props.children}
            </Typography>
            </CardContent>
        </Card>
    </Grid>
  );
}