import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';

const socials = [
    {
        name: "Facebook",
        icon: <FacebookIcon/>,
        link: process.env.REACT_APP_FACEBOOK_URL,
    },
    {
        name: "Twitter",
        icon: <TwitterIcon/>,
        link:  process.env.REACT_APP_TWITTER_URL,
    },
    {
        name: "Instagram",
        icon: <InstagramIcon/>,
        link: process.env.REACT_APP_INSTAGRAM_URL,
    },
];

const useStyles = makeStyles((theme) => ({
    facebook: {
        color: '#3b5998',
        width:30,
    },
    twitter: {
        color: '#00acee',
        width: 30, 
    },
    instagram: {
        color: '#e4405f',
        width:30, 
    },
}));

export default function Socials() {
    const classes = useStyles();
    return (
        <div>
            {socials.filter((social) => social.link && social.link != '').map((social) => (
                <Link href={social.link} className={classes[social.name.toLocaleLowerCase()]}>{social.icon}
                </Link>
            ))}
        </div>
    )
}
