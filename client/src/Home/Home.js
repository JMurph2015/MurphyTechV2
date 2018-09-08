import React, { Component } from 'react';
import './Home.css';

import { Typography, Button, IconButton } from "@material-ui/core";
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
                <CardContent className="content">
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
                <CardContent className="content">
                    <Typography variant="headline" color="textSecondary">
                        My Interests
                    </Typography>
                    <Typography variant="body2">
                        Aerospace and Astronomy
                    </Typography>
                    <Typography variant="body1">
                        A lifelong passion, I've been building model
                        planes and rockets, and looking through telescopes
                        for as long as I can remember.  Above is a picture
                        I took with my phone via a telescope of the recent
                        total solar eclipse.
                    </Typography>
                    <br/>
                    <Typography variant="body2">
                        Programming and Linux
                    </Typography>
                    <Typography variant="body1">
                        A newer interest of mine, but that's only to say
                        that it's been a hobby of mine for almost 8 years now.
                        I got into using Linux back in around 2011-2012 and 
                        ever since have been dual-booting or single-booting
                        some distro or another.  I've learned more programming
                        languages than I care to mention, but greatest thing
                        about being a developer is the freedom.  No longer
                        does one have to wait for someone with arcane knowledge
                        to fix your problems for you.
                    </Typography>
                    <br/>
                    <Typography variant="body2">
                        Running and Backpacking
                    </Typography>
                    <Typography variant="body1">
                        Going off that theme of freedom, another significant
                        hobby of mine is backpacking.  The self-reliance and
                        freedom that comes with the simplicity of you, your
                        pack, and the land is intoxicating.  In a similar vein,
                        I love distance running because of the same combination
                        of oneself and the land.
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardMedia
                    className="media"
                    component="img"
                    title="A Rust Snippet"
                    image="/assets/snippet-1-crop.png" />
                <CardContent className="content">
                    <Typography variant="headline" color="textSecondary">
                        My Projects
                    </Typography>
                    <Typography variant="body2">
                        Spacebox
                    </Typography>
                    <Typography variant="body1">
                        Spacebox is a work-in-progress FOSS Dropbox client
                        that aims to be a fully-featured, modern rethink of
                        the official client that hasn't seen much noticable
                        love in the past few years.  Furthermore, it has
                        become somewhat required due to Dropbox dropping
                        support for non-ext4 filesystems later this year.
                    </Typography>
                    <Button
                        className="link-button"
                        variant="contained"
                        href="https://github.com/spacebox-org/spacebox"
                        aria-label="GitHub">
                        <Ionicon icon="logo-github"/>
                    </Button>
                    <br/><br/>
                    <Typography variant="body2">
                        gTile
                    </Typography>
                    <Typography variant="body1">
                        I'm also a maintainer on the gTile GNOME shell
                        extension.  It allows one to tile windows to an
                        arbitrary grid (e.g. 12x8) to allow more efficient
                        use of large monitors.
                    </Typography>
                    <Button
                        className="link-button"
                        variant="contained"
                        href="https://github.com/gTile/gTile"
                        aria-label="GitHub">
                        <Ionicon icon="logo-github"/>
                    </Button>
                    <br/><br/>
                    <Typography variant="body2">
                        Rust rpi_ws281x Bindings
                    </Typography>
                    <Typography variant="body1">
                        I also maintain the Rust bindings for the rpi_ws281x
                        userspace driver for LEDs on the Raspberry Pi. I
                        made this for yet another project to enable
                        network addressed LEDs for music effects.  The
                        Rust bindings were created when I wanted to port
                        my controller program from Julia to Rust for better
                        performance (mostly load time).
                    </Typography>
                    <Button
                        className="link-button"
                        variant="contained"
                        href="https://github.com/rpi-ws281x/rpi-ws281x-rust"
                        aria-label="GitHub">
                        <Ionicon icon="logo-github"/>
                    </Button>
                    
                </CardContent>
            </Card>
            <Button 
                href="https://github.com/JMurph2015"
                variant="contained"
                color="secondary">
                <Ionicon icon="logo-github"/>
                GitHub
            </Button>
            <Button
                href="https://www.linkedin.com/in/joseph-murphy-03a223bb/"
                variant="contained"
                color="secondary">
                <Ionicon icon="logo-linkedin"/>
                Linkedin
            </Button>
            <Button
                href="https://twitter.com/JMurph2015"
                variant="contained"
                color="secondary">
                <Ionicon icon="logo-twitter"/>
                Twitter
            </Button>
        </div>
        </div>
    )
}

export default Home;