import { AppBar, Toolbar, Typography, Button, Avatar } from '@mui/material';
import React from 'react';

export default function Header() {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#0a1929' }}>
            <Toolbar>
                <Avatar alt="Bill Zhang" src="/images/avatar.png" sx={{ marginRight: 2 }} />
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Project 2: Pantry Tracker
                </Typography>
                <Button color="inherit">NEXT.JS</Button>
                <Button color="inherit">REACT</Button>
                <Button color="inherit">FIREBASE</Button>
                <Button color="inherit">GCP</Button>
                <Button color="inherit">VERCEL</Button>
                <Button color="inherit">OPENAI</Button>
                <Button color="inherit">CI/CD</Button>
            </Toolbar>
        </AppBar>
    );
}
