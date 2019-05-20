import React from 'react';
import './Home.css';

import { Typography, Button, IconButton, Divider } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Ionicon from 'react-ionicons';

export function Home() {

    return (
        <div className="content">
            <Typography className="title" variant="display2">
                Joseph P. Murphy
            </Typography>
            <Typography className="subtitle" variant="display1" color="textPrimary">
                About Me
            </Typography>
            <div className="paragraph-mount">
                <div className="paragraph">
                    <CardMedia
                        className="selfie"
                        component="img"
                        title="That's me!"
                        image="/assets/me_in_portland_full.jpg" />
                    <Typography variant="body1"
                        className="bio">
                        Welcome to my website!  I'm Joseph Murphy, an engineering student at MIT.
                        I hail from the great state of Arkansas and a small town called Bentonville.
                        The last of five, my family is quite large and boisterous, so don't worry about
                        interrupting me if I ramble, it's the only way I get a word in edgewise at home.
                        Don't let my Midsouth/Midwest background fool you, I've been to all 48 states of
                        the contiguous United States as well as Canada, Ireland, Italy, Belgium, and Spain;
                        I've seen a decent bit.  As for what I do these days, I spent the last two summers
                        interning at JPL and I'm early in my senior year at MIT for aerospace engineering.
                </Typography>
                </div>
            </div>
            <Typography className="subtitle" variant="display1" color="textPrimary">My Interests</Typography>
            <Card className="card">
                <CardMedia
                    className="media"
                    component="img"
                    title="Great American Solar Eclipse"
                    image="/assets/solar_eclipse.jpg" />
                <CardContent className="card-content">
                    <Typography variant="headline" color="textSecondary"> Space Stuff </Typography>
                    <Divider style={{ marginBottom: "0.25rem", marginTop: "0.25rem" }} />
                    <Typography variant="body1">
                        A lifelong passion, I've been building model
                        planes and rockets, and looking through telescopes
                        for as long as I can remember.  Above is a picture
                        I took with my phone via a telescope of the recent
                        total solar eclipse.
                    </Typography>
                </CardContent>
            </Card>
            <Card className="card">
                <CardMedia
                    className="media"
                    component="img"
                    title="A Rust Snippet"
                    image="/assets/snippet-1-crop.png" />
                <CardContent className="card-content">
                    <Typography variant="headline" color="textSecondary">
                        Programming and Linux
                    </Typography>
                    <Divider style={{ marginBottom: "0.25rem", marginTop: "0.25rem" }} />
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
                </CardContent>
            </Card>
            <Card className="card">
                <CardMedia
                    className="media"
                    component="img"
                    title="View of the Charles"
                    image="/assets/charles_river.jpg" />
                <CardContent>
                    <Typography variant="headline" color="textSecondary">
                        Running
                    </Typography>
                    <Divider style={{ marginBottom: "0.25rem", marginTop: "0.25rem" }} />
                    <Typography variant="body1">
                        I started runing in junior high and was hooked.  There have been some
                        rough years and some dry spells, but running has been one of those things
                        that I keep coming back to for the freedom and feeling of accomplishment
                        when I finish a good workout.
                    </Typography>
                </CardContent>
            </Card>
            <Card className="card">
                <CardMedia
                    className="media"
                    component="img"
                    title="Backpacking in Spain!"
                    image="/assets/backpacking.jpg" />
                <CardContent>
                    <Typography variant="headline" color="textSecondary">
                        Backpacking
                    </Typography>
                    <Divider style={{ marginBottom: "0.25rem", marginTop: "0.25rem" }} />
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
            <Typography className="subtitle" variant="display1" color="textPrimary">My Projects</Typography>
            <Card className="card">
                <CardContent>
                    <div className="headline">
                        <Typography
                            variant="headline"
                            color="textSecondary"
                            style={{
                                flexGrow: 1,
                                verticalAlign: "middle"
                            }}>
                            Spacebox
                        </Typography>
                        <IconButton
                            className="link-button"
                            variant="contained"
                            href="https://github.com/spacebox-org/spacebox"
                            aria-label="GitHub">
                            <Ionicon icon="logo-github" />
                        </IconButton>
                    </div>
                    <Divider style={{ marginBottom: "0.25rem", marginTop: "0.25rem" }} />
                    <Typography variant="body1">
                        Spacebox is a work-in-progress FOSS Dropbox client
                        that aims to be a fully-featured, modern rethink of
                        the official client that hasn't seen much noticable
                        love in the past few years.  Furthermore, it has
                        become somewhat required due to Dropbox dropping
                        support for non-ext4 filesystems later this year.
                    </Typography>
                </CardContent>
            </Card>
            <Card className="card">
                <CardContent>
                    <div className="headline">
                        <Typography
                            variant="headline"
                            color="textSecondary"
                            style={{
                                flexGrow: 1,
                                verticalAlign: "middle"
                            }}>
                            gTile
                        </Typography>
                        <IconButton
                            className="link-button"
                            variant="contained"
                            href="https://github.com/gTile/gTile"
                            aria-label="GitHub">
                            <Ionicon icon="logo-github" />
                        </IconButton>
                    </div>
                    <Divider style={{ marginBottom: "0.25rem", marginTop: "0.25rem" }} />
                    <Typography variant="body1">
                        I'm also a maintainer on the gTile GNOME shell
                        extension.  It allows one to tile windows to an
                        arbitrary grid (e.g. 12x8) to allow more efficient
                        use of large monitors.
                    </Typography>
                </CardContent>
            </Card>
            <Card className="card">
                <CardContent>
                    <div className="headline">
                        <Typography
                            variant="headline"
                            color="textSecondary"
                            style={{
                                flexGrow: 1,
                                verticalAlign: "middle"
                            }}>
                            Rust rpi_ws281x Bindings
                        </Typography>
                        <IconButton

                            className="link-button"
                            variant="fab"
                            href="https://github.com/rpi-ws281x/rpi-ws281x-rust"
                            aria-label="GitHub">
                            <Ionicon icon="logo-github" />
                        </IconButton>
                    </div>
                    <Divider style={{ marginBottom: "0.25rem", marginTop: "0.25rem" }} />
                    <Typography variant="body1">
                        I also maintain the Rust bindings for the rpi_ws281x
                        userspace driver for LEDs on the Raspberry Pi. I
                        made this for yet another project to enable
                        network addressed LEDs for music effects.  The
                        Rust bindings were created when I wanted to port
                        my controller program from Julia to Rust for better
                        performance (mostly load time).
                    </Typography>
                </CardContent>
            </Card>
            <Card className="card">
                <CardContent>
                    <div className="headline">
                        <Typography
                            variant="headline"
                            color="textSecondary"
                            style={{
                                flexGrow: 1,
                                verticalAlign: "middle"
                            }}>
                            Irradiance
                        </Typography>
                        <IconButton

                            className="link-button"
                            variant="fab"
                            href="https://github.com/JMurph2015/Irradiance.jl"
                            aria-label="GitHub">
                            <Ionicon icon="logo-github" />
                        </IconButton>
                    </div>
                    <Divider style={{ marginBottom: "0.25rem", marginTop: "0.25rem" }} />
                    <Typography variant="body1">
                        Irradiance is a project I started in May of 2017 to
                        generate LED effects synchronized to music and display
                        those effects on remotely controlled LED strips.  This
                        was mostly intended to facilitate merriment in my dorm,
                        but ended up a tour de force in a variety of more
                        advanced programming techniques like network based
                        autoconfiguration, GPU acceleration, virtual addressing,
                        OpenGL/GLFW, and much more.
                    </Typography>
                </CardContent>
            </Card>

            <div className="grid-break">
            </div>

            <Button
                href="https://github.com/JMurph2015"
                variant="contained"
                color="secondary"
                className="button-content">
                <Ionicon icon="logo-github" />
                GitHub
            </Button>
            <Button
                href="https://www.linkedin.com/in/joseph-murphy-03a223bb/"
                variant="contained"
                color="secondary"
                className="button-content">
                <Ionicon icon="logo-linkedin" />
                Linkedin
            </Button>
            <Button
                href="https://twitter.com/JMurph2015"
                variant="contained"
                color="secondary"
                className="button-content">
                <Ionicon icon="logo-twitter" />
                Twitter
            </Button>
        </div>
    )
}

export default Home;