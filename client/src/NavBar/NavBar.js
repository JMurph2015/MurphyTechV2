import React, { Component } from 'react';
import './NavBar.css';
import { Typography, Menu } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import MenuItem from '@material-ui/core/MenuItem';
import ToolBar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';

export function NavBar() {
    return (
        <AppBar position="sticky">
            <ToolBar>
                <MenuItem>
                    <Typography variant="headline" color="textPrimary">MurphyTech</Typography>
                </MenuItem>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <MenuItem>
                        <Typography variant="subheading">Home</Typography>
                    </MenuItem>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none' }}>
                    <MenuItem>
                        <Typography variant="subheading">About</Typography>
                    </MenuItem>
                </Link>
                <Link to="/blog" style={{ textDecoration: 'none' }}>
                    <MenuItem>
                        <Typography variant="subheading">Blog</Typography>
                    </MenuItem>
                </Link>
            </ToolBar>
        </AppBar>
    );
}

export default NavBar;

