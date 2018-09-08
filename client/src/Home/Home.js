import React, { Component } from 'react';
import './Home.css';

import { Typography, Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Ionicon from 'react-ionicons';

export function Home() {

    return (
        <div>
        <Typography id="title" variant="display1">Joseph P. Murphy</Typography>
        <div id="content">
            <Card className="card">
                <CardMedia 
                    className="media"
                    component="img"
                    title="Me in Portland, 2017"
                    image="/assets/me_in_portland_full.jpg" />
                <CardContent>
                    <Typography variant="headline" color="textSecondary">
                        About Me
                    </Typography>
                    <Typography variant="body1">
                        I couldn't actually decide how to summarize who I am
                        and what I'm about in this little blurb, so I'd just
                        encourage you to stop by the "About" page here for
                        more. 
                    </Typography>
                </CardContent>
            </Card>
            <Card >
                <CardMedia
                    className="media"
                    component="img"
                    title="Great American Solar Eclipse"
                    image="/assets/solar_eclipse.jpg" />
                <CardContent>
                    <Typography variant="headline" color="textSecondary">
                        My Interests
                    </Typography>
                    <Typography variant="body1">
                        Hello! Welcome to my personal webpage.
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardMedia
                    className="media"
                    component="img"
                    title="A Rust Snippet"
                    image="/assets/snippet-1-crop.png" />
                <CardContent>
                    <Typography variant="headline" color="textSecondary">
                        My Projects
                    </Typography>
                    <Typography variant="body1">
                        Hello! Welcome to my personal webpage.
                    </Typography>
                </CardContent>
            </Card>
            <Button 
                href="https://github.com/JMurph2015"
                variant="contained"
                color="secondary">
                <Ionicon icon="logo-github" fontSize="1.5em"/>
                GitHub
            </Button>
            <Button
                href="https://www.linkedin.com/in/joseph-murphy-03a223bb/"
                variant="contained"
                color="secondary">
                <Ionicon icon="logo-linkedin" fontSize="1.5em"/>
                Linkedin
            </Button>
            <Button
                href="https://twitter.com/JMurph2015"
                variant="contained"
                color="secondary">
                <Ionicon icon="logo-twitter" fontSize="1.5em"/>
                Twitter
            </Button>
        </div>
        </div>
    )
}

export default Home;