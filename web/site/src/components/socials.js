import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import facebook from '../img/facebook.svg';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    socialIcon: {
        width: theme.spacing(2.5),
        height: theme.spacing(2.5),
    },
    facebook: {
        color: '#3b5998',
        width: theme.spacing(3),
    },
    twitter: {
        color: '#00acee',
        width: theme.spacing(3),
    },
    instagram: {
        color: '#e4405f',
        width: theme.spacing(3),
    },   
}));

export default function Socials() {
    const classes = useStyles();

    const socials = [
        { 
            name: "facebook",
            icon: 'facebook.svg',
            link: process.env.REACT_APP_FACEBOOK_URL,
        },
        {
            name: "Twitter",
            icon: <TwitterIcon className={classes.twitter}/>,
            link:  process.env.REACT_APP_TWITTER_URL,
        },
        {
            name: "Instagram",
            icon: <InstagramIcon className={classes.instagram}/>,
            link: process.env.REACT_APP_INSTAGRAM_URL,
        },
    ];
    
    return (
        <span>
            {socials.filter((social) => social.link && social.link != '').map((social) => (
                <Link
                 href={social.link} 
                 className={classes[social.name.toLocaleLowerCase()]}
                 target='_blank'
                 >
                    <img src={social.icon} className={classes.socialIcon}/>
                </Link>
                    
            ))}
        </span>
    )
}
